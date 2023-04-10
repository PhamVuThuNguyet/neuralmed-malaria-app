import { React} from "react";
import { Button, Input, Form} from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactComponent as NeuralMed } from "../../../assets/NeuralMed.svg";
import api from "../../../api/api";

import styles from "../../../styles/Login/login-form.module.scss";
import { setUserData } from "../../../store/users/userSlice";
import { useDispatch } from 'react-redux';
import { toast } from '../../../utils/toast';

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
        toast.success('Login successfully');
        const { accessToken, refreshToken, user } = response.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        dispatch(setUserData(user));
        navigate('/');
      })
      .catch(error => {
        toast.error('Password is not correct or account does not exist');
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
