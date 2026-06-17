// Toggle between Login and Registration panel forms
function toggleAuthView(showRegister) {
    document.getElementById('auth-login-view').style.display = showRegister ? 'none' : 'block';
    document.getElementById('auth-register-view').style.display = showRegister ? 'block' : 'none';
    document.getElementById('auth-msg').textContent = '';
}

// Show a quick text alert to users
function showMessage(text, isError = false) {
    const msgEl = document.getElementById('auth-msg');
    msgEl.textContent = text;
    msgEl.style.color = isError ? 'var(--coral-mid)' : 'var(--teal-mid)';
}

// 🔐 HANDLE REGISTRATION
async function handleRegister() {
    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value;
    const role = document.getElementById('reg-role').value;

    if (!username || !password) {
        return showMessage('Please fill out all credentials.', true);
    }

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, role })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Registration failed.');
        }

        showMessage('Account created successfully! Switching to login...');
        setTimeout(() => {
            toggleAuthView(false);
            document.getElementById('login-username').value = username;
        }, 1500);

    } catch (err) {
        showMessage(err.message, true);
    }
}

// 🔑 HANDLE LOGIN
async function handleLogin() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;

    if (!username || !password) {
        return showMessage('Please enter both username and password.', true);
    }

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Invalid credentials.');
        }

        // SUCCESS: Save user session tokens locally
        localStorage.setItem('username', username);
        localStorage.setItem('role', data.role);

        showMessage('Access granted! Redirecting...');

        // Role-based routing redirection
        setTimeout(() => {
            if (data.role === 'Staff') {
                window.location.href = '/Dashboard/Staff/dashboard.html'; // Points to your staff subfolder path
            } else {
                window.location.href = '/RoadMap/roadmap.html'; // Points directly to your Roadmap subfolder file
            }
        }, 1000);

    } catch (err) {
        showMessage(err.message, true);
    }
}