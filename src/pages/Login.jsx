import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Assuming login is successful
        setSuccessMessage('Login successful!');
        setTimeout(() => setSuccessMessage(''), 3000);  // Hide after 3 seconds
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                {successMessage && <div className="success-message">{successMessage}</div>}
            </div>
        </div>
    );
};

export default Login;
