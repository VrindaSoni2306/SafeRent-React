import { useState } from "react";
import "./Signup.css";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);

    alert("Signup UI working successfully!");
  };

  const handleGoogleSignup = () => {
    alert("Google Authentication will be integrated later.");
  };

  return (
    <div className="signup-page">

      <div className="signup-container">

        <div className="signup-heading">
          <h1>Create Account</h1>
          <p>Join SafeRent and find your perfect home.</p>
        </div>

        <form onSubmit={handleSignup}>

          <div className="signup-form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="signup-form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="signup-form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit phone number"
              required
            />
          </div>

          <div className="signup-form-group">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              minLength={6}
              required
            />
          </div>

          <div className="signup-form-group">
            <label>Confirm Password</label>

            <div className="signup-password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />

              <button
                type="button"
                className="signup-show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button type="submit" className="signup-button">
            Create Account
          </button>

        </form>

        <div className="signup-divider">
          <span>OR</span>
        </div>

        <button
          type="button"
          className="signup-google-button"
          onClick={handleGoogleSignup}
        >
          <span className="signup-google-icon">G</span>
          Continue with Google
        </button>

        <p className="signup-login-text">
          Already have an account?
          <a href="/login"> Login</a>
        </p>

      </div>

    </div>
  );
}

export default Signup;