import { React } from "react";
import styles from "../../styles/Login/login-form.module.scss";
import LoginForm from "./components/login-form";
import { Provider } from 'react-redux';
import store from "../../store/users/store";
export default function Login() {
  return (
      <div className={styles.form__container}>
         <Provider store={store}>
           <LoginForm />
         </Provider>
      </div>
  );
}