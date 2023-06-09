import React, { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Password and confirm password do not match");
      return;
    }

    try {
      const url = "http://localhost:3001/reset-password";
      const token = localStorage.getItem("resetToken");

      const response = await axios.post(url, {
        password,
        token,
      });

      console.log(response.data);

      // Handle success
      // Redirect to success page or show success message
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Reset Password</h1>
            <input
              type="password"
              placeholder="New Password"
              name="password"
              value={password}
              onChange={handleChangePassword}
              required
              className={styles.input}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChangeConfirmPassword}
              required
              className={styles.input}
            />

            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
