import { React } from "react";
import styles from "../../styles/AdminConsole/adminconsole-doctor-register.module.scss";
import LoginForm from "./components/login-form";
export default function Login() {
  return (
    <div className="">
      <div className={styles.form__container}>
        <LoginForm />
      </div>
    </div>
  );
}