import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Role:", role);

    alert("Login successful!");

    if (role === "USER") {
  navigate("/user/dashboard");
}
else if (role === "OWNER") {
  navigate("/owner/dashboard");
}
else if (role === "ADMIN") {
  navigate("/admin");
}
  };

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
                className="eye-button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Login As</label>

            <select
              value={role}
              onChange={(event) => setRole(event.target.value)}
              required
            >
              <option value="USER">User</option>
              <option value="OWNER">Owner</option>
              <option value="ADMIN">Admin</option>
            </select>
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
          <Link to="/signup"> Sign Up</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;