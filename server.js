// 1. Bring in our tools
require('dotenv').config(); 
const express = require('express');
const { Pool } = require('pg'); 
const bcrypt = require('bcryptjs');

// 2. Initialize the app
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()); // This allows Express to understand JSON data
app.use(express.static('public')); // Tells Express to serve your HTML files

// 3. Set up the Cloud Database connection pool (Neon.tech)
const pool = new Pool({
  // Pulls directly from Render's secure environment variables
  connectionString: process.env.DATABASE_URL,
  ssl: { 
    rejectUnauthorized: false // Required for secure cloud handshakes with Neon
  }
});

// Passive error catcher to prevent idle thread crashes
pool.on('error', (err) => console.error('Cloud Pool Idle Error:', err.message));

// 4. Test the cloud database handshake
pool.connect((err, client, release) => {
  if (err) {
    console.error('❌ Cloud database connection failed. Check Render Environment Variables!', err.stack);
  } else {
    console.log('🗄️ Successfully established a secure connection to the live Neon.tech database.');
  }
  if (client) release();
});

// ==================== ROUTES ====================

// REGISTER ROUTE
app.post('/register', async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Hash the password (scramble it 10 times)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save the user directly to your online Neon database
    const newUser = await pool.query(
      "INSERT INTO users (username, password_hash, role) VALUES ($1, $2, $3) RETURNING *",
      [username, hashedPassword, role]
    );

    res.json({ message: "User registered successfully!", user: newUser.rows[0].username });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error or username already exists." });
  }
});

// LOGIN ROUTE
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Query your live cloud tables to find the user
    const userResult = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    if (userResult.rows.length === 0) {
      return res.status(400).json({ error: "User does not exist." });
    }

    const user = userResult.rows[0];

    // Compare the typed password with the database hash
    const validPassword = await bcrypt.compare(password, user.password_hash);

    if (!validPassword) {
      return res.status(401).json({ error: "Incorrect password." });
    }

    res.status(200).json({ 
      message: "Login successful!", 
      role: user.role 
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error during login." });
  }
});

// SAVE-TRACK ROUTE
app.post('/save-track', async (req, res) => {
  try {
    const { username, track } = req.body;

    // Update the user's roadmap_track in your online Neon database
    await pool.query(
      "UPDATE users SET roadmap_track = $1 WHERE username = $2",
      [track, username]
    );

    res.status(200).json({ message: "Roadmap track saved successfully!" });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error while saving track." });
  }
});

// GET STUDENTS ROSTER ROUTE
app.get('/api/students', async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT username, roadmap_track FROM users WHERE role = 'Student'"
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error while fetching students." });
  }
});
// SECURE ENDPOINT: REMOVE A USER FROM THE SYSTEM
app.delete('/api/students/:username', async (req, res) => {
  try {
    const { username } = req.params;

    // Prevent administrators from accidentally deleting themselves if they type their own name
    if (req.body.adminUser === username) {
      return res.status(400).json({ error: "Action denied. You cannot remove your own active session account." });
    }

    const result = await pool.query(
      "DELETE FROM users WHERE username = $1 AND role = 'Student' RETURNING username",
      [username]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Student account not found in database registry." });
    }

    res.status(200).json({ message: `Successfully removed ${username} from the ecosystem.` });
  } catch (err) {
    console.error("Database deletion process exception:", err.message);
    res.status(500).json({ error: "Server database execution failure." });
  }
});
// 5. Start the engine
app.listen(port, () => {
  console.log(`🚀 Cornerstone AI server is alive in the cloud on port ${port}`);
});