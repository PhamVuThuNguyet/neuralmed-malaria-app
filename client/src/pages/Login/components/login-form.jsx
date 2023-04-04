import { React } from "react";
import { Button, Input, Form, DatePicker } from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as NeuralMed } from "../../../assets/NeuralMed.svg";
import axios from 'axios';
import styles from "../../../styles/Login/login-form.module.scss";

const LoginForm = () => {
  const [form] = Form.useForm();
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
    axios.post('/api/submit-form', values)
      .then(response => {
        console.log('Form submitted successfully');
      })
      .catch(error => {
        console.error('Form submission failed:', error);
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
