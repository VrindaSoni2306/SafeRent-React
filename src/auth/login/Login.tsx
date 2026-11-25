import { useState } from "react";
import "./Login.css";

function Login() {

  // Email aur password store karne ke liye
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Password show/hide karne ke liye
  const [showPassword, setShowPassword] = useState(false);

  // Login form submit function
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    alert("Login UI working successfully!");
  };

  // Google login function
  const handleGoogleLogin = () => {
    alert("Google Authentication will be integrated later.");
  };

  return (
    <div className="login-page">

      <div className="login-container">

        <div className="login-heading">
          <h1>Welcome Back!</h1>
          <p>Login to continue your SafeRent journey.</p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <div className="password-box">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />

              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button
          type="button"
          className="google-button"
          onClick={handleGoogleLogin}
        >
          <span className="google-icon">G</span>
          Continue with Google
        </button>

        <p className="signup-text">
          Don't have an account?
          <a href="/signup"> Sign Up</a>
        </p>

      </div>

    </div>
  );
}

export default Login;