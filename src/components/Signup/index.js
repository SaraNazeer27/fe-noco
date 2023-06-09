import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

//Signup component
const Signup = () => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    if (!data.password.trim()) {
      errors.password = "Password is required";
    } else if (data.password.trim().length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    if (!data.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  //Api call to signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      try {
        const url = "http://localhost:3001/api/signup";
        const { data: res } = await axios.post(url, data);
        navigate("/login");
        console.log(res.data.message);
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setErrors({ message: error.response.data.message });
        }
      }
    } else {
      setErrors(errors);
    }
  };

  //Form to signup
  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={data.name}
              required
              className={styles.input}
            />
            {errors.name && (
              <div className={styles.error_msg}>{errors.name}</div>
            )}

            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            {errors.email && (
              <div className={styles.error_msg}>{errors.email}</div>
            )}

            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {errors.password && (
              <div className={styles.error_msg}>{errors.password}</div>
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleChange}
              value={data.confirmPassword}
              required
              className={styles.input}
            />
            {errors.confirmPassword && (
              <div className={styles.error_msg}>{errors.confirmPassword}</div>
            )}
            <p>
              Already have account? <Link to="/login">Login</Link>
            </p>

            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
