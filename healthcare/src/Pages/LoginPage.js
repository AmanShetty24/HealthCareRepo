import React, { useState } from "react";
import "../styles/LoginPage.css";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation
        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }
        // TODO: Add authentication logic here
        setError("");
        alert("Login successful!");
    };

    return (
        <div className="login-container">
            <h2>Health Care Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                {error && <div className="error">{error}</div>}
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;