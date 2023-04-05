import { React } from "react";
import { Button, Input, Form, DatePicker, Select } from "antd";
import styles from "../../../styles/AdminConsole/adminconsole-doctor-register.module.scss";
import api from "../../../api/api";

const DoctorRegister = () => {
  const accessToken = localStorage.getItem('accessToken');
  const apiConfig = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  const [form] = Form.useForm();
  const formItems = [
    {
      label: "Username",
      name: "username",
      inputComponent: <Input className={styles.input}></Input>
    },
    {
      label: "Password",
      name: "password",
      inputComponent: <Input.Password className={styles.input}></Input.Password>
    },
    {
      label: "Name",
      name: "name",
      inputComponent: <Input className={styles.input}></Input>
    },
    {
      label: "Role",
      name: "role",
      inputComponent:  <Input className={styles.input}></Input>
    },
    {
      label: "Gender",
      name: "gender",
      inputComponent: <Input className={styles.input}></Input>
    },
    {
      label: "Birth",
      name: "birth", 
      inputComponent: <DatePicker className={styles.datepicker} format="YYYY-MM-DD" />
    },
    {
      label: "age",
      name: "age",
      inputComponent: <Input className={styles.input}></Input>
    },
    {
      label: "Department",
      name: "department",
      inputComponent: <Input className={styles.input}></Input>
    }
  ];

  const onFinish = (values) => {
 
    const info = {
       age: values.age,
       department: values.department,
       gerder: values.gerder
    };
    const user = {
      username: values.username,
      password: values.password,
      name: values.name,
      role: values.role,
      info: info
    }
    api.post('/admin/add-user', user, apiConfig)
    .then(response => {
      alert('Form submitted successfully');
    })
    .catch(error => {
      alert('Form submitted failed');
    });
    console.log(values);
  };

  return (
    <div>
      <Form form={form} onFinish={onFinish}  layout="vertical">
        {formItems.map((item, index) => (
          <Form.Item
            key={index}
            label={<label className={styles.form__label__text}>{item.label}</label>}
            name={item.name}
          >
            {item.inputComponent}
          </Form.Item>
        ))}
        <Form.Item> 
          <div className={styles.button}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
            >
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DoctorRegister;
