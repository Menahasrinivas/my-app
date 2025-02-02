import { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        if (name === '' || email === '' || password === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Assuming registration is successful
        setSuccessMessage('Registration successful!');
        setTimeout(() => setSuccessMessage(''), 3000);  // Hide after 3 seconds
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
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
                    <button type="submit">Register</button>
                </form>
                {successMessage && <div className="success-message">{successMessage}</div>}
            </div>
        </div>
    );
};

export default Register;
