import React, { useState } from 'react';
import axios from 'axios';

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
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                <button type="submit">Sign Up</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default SignUpPage;
