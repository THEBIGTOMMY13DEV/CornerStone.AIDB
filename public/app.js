const registerForm = document.getElementById('registerForm');
const messageEl = document.getElementById('message');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Stops the page from refreshing

  // 1. Grab the data from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  try {
    // 2. Send the exact same POST request we did in Thunder Client
    const response = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, role })
    });

    // 3. Read the server's response
    const data = await response.json();

    if (response.ok) {
      messageEl.style.color = "green";
      messageEl.textContent = data.message;
      registerForm.reset(); // Clear the form
    } else {
      messageEl.style.color = "red";
      messageEl.textContent = data.error;
    }

  } catch (error) {
    messageEl.textContent = "Cannot connect to server.";
  }
});
// --- LOGIN LOGIC ---
const loginForm = document.getElementById('loginForm');
const loginMessageEl = document.getElementById('loginMessage');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault(); 

  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
      loginMessageEl.style.color = "green";
      loginMessageEl.textContent = "Success! Redirecting...";

      // NEW: Drop the username into the browser's backpack
      localStorage.setItem('username', username);
      
      // THE REDIRECT LOGIC
      setTimeout(() => {
        if (data.role === "Student") {
          window.location.href = "student.html";
        } else {
          window.location.href = "staff.html";
        }
      }, 1000); // Wait 1 second so they see the success message

    } else {
      loginMessageEl.style.color = "red";
      loginMessageEl.textContent = data.error;
    }

  } catch (error) {
    loginMessageEl.textContent = "Cannot connect to server.";
  }
});