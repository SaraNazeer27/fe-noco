import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

const ResetPassword = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>ResetPassword </h1>
						<input
							type="password"
							placeholder="NewPassword"
							name="NewPassword"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>

                
                        
                        <input
							type="password"
							placeholder="ConfirmPassword"
							name="ConfirmPasswordord"
							onChange={handleChange}
							value={data.Confirmpassword}
							required
							className={styles.input}
						/>
						

						

                <div className={styles.right}>
					
				
				</div>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	)
};

export default ResetPassword;