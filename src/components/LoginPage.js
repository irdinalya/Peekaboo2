import React, { useState, useRef } from "react";
import "./Login.css";

function LoginPage({ navigateToPage, onLogin }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            console.log('Attempting login with:', username, email, password);
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            console.log('Login response status:', response.status);

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);

                setMessage(data.message); // Show success message
                onLogin(data); // Save the logged-in user information
                navigateToPage('home'); // Redirect to the home page
            } else {
                const errorData = await response.json();
                setMessage(errorData.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    };
    const toggleVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="login-container">
        {/* Login Card */}
        <div className="login-card">
            <img src="/images/logo.jpg" alt="Login Illustration" className="login-image" />
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="login-input"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="login-input"
                />
                <button type="submit" className="login-button">Login</button>
            </form>
            <p className="login-message">{message}</p>
        </div>

        {/* Video Section */}
        <div className="video-section">
                <video
                    ref={videoRef}
                    loop
                    playsInline
                    className="login-video"
                >
                    <source src="/video/logintro.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <button className="audio-toggle-button" onClick={toggleVideo}>
                    {isPlaying ? "Pause Video" : "Play Video"}
                </button>
            </div>
    </div>
    );
}

export default LoginPage;
