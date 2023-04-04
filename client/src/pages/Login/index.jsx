import { React } from "react";
import styles from "../../styles/Login/login-form.module.scss";
import LoginForm from "./components/login-form";
export default function Login() {
  return (
      <div className={styles.form__container}>
          <LoginForm />
      </div>
  );
}