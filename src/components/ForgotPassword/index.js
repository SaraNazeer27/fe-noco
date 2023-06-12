import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = "http://localhost:3001/forgot-password";
      const response = await axios.post(url, { email });
      localStorage.setItem("email", email);
      setSuccessMessage(response.data.message);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Forgot Password</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={email}
              required
              className={styles.input}
            />

            {error && <div className={styles.error_msg}>{error}</div>}
            {successMessage && <div className={styles.success_msg}>{successMessage}</div>}
            <button type="submit" className={styles.green_btn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
