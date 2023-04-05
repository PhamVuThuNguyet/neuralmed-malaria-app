import { React} from "react";
import { Button, Input, Form} from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactComponent as NeuralMed } from "../../../assets/NeuralMed.svg";
import api from "../../../api";

import styles from "../../../styles/Login/login-form.module.scss";
import { setUserData } from "../../../store/users/reducer.js";
import { useDispatch } from 'react-redux';
import api from "../../../api/api";
const LoginForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formItems = [
    {
      name: "username",
      inputComponent: <Input placeholder="Username" className={styles.input}></Input>
    },
    {
      name: "password",
      inputComponent: <Input.Password placeholder="Password" className={styles.password}></Input.Password>
    }
  ];

  const onFinish = (values) => {
    api.post('/auth/login', values)
      .then(response => {
        alert('Login successfully');
        const { accessToken, user } = response.data;
        localStorage.setItem('accessToken', accessToken);
        dispatch(setUserData(user));
        navigate('/');
        localStorage.setItem('accessToken', accessToken);
        dispatch(setUserData(user));
        navigate('/');
     
        localStorage.setItem('accessToken', accessToken);
        dispatch(setUserData(user));
        navigate('/');
      })
      .catch(error => {
        alert('Password is not correct or account does not exsist');
      });
  };
  

  return (
    <div>
      <Form.Item>
        <div className ={styles.icon}>
          <NeuralMed > </NeuralMed>
        </div>
        <label className={styles.title}>LOGIN</label>
      </Form.Item>
      <Form form={form} onFinish={onFinish}  layout="vertical">
        {formItems.map((item, index) => (
          <Form.Item
            key={index}
            name={item.name}
          >
            {item.inputComponent}
          </Form.Item>
        ))}
        <Form.Item >
          <Link to="/">
            <p className={styles["forgot-pw"]}>Forgot password</p>
          </Link>
        </Form.Item>
        
        <Form.Item> 
          <div className={styles.button}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
            >
              LOG IN NOW
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
