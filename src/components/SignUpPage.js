import React, { useState } from "react";
import axios from "axios";
import "./SignUpPage.css";

function SignUpPage({ navigateToPage }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/signup', {
                username,
                email,
                password,
            });
            setMessage(response.data.message);
            setUsername('');
            setEmail('');
            setPassword('');
        } catch (error) {
            setMessage(error.response?.data?.message || 'Sign-up failed. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <img src="/images/logo.jpg" alt="Sign Up Illustration" className="signup-image" />
                <h2>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="signup-input"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="signup-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="signup-input"
                    />
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
                <p className="signup-message">{message}</p>
            </div>
        </div>
    );
}

export default SignUpPage;
