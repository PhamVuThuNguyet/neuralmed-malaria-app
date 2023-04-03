import { React } from "react";
import { Button, Input, Form, DatePicker } from "antd";
import axios from 'axios';
import styles from "../../../styles/AdminConsole/adminconsole-doctor-register.module.scss";

const DoctorRegister = () => {
  const [form] = Form.useForm();
  const formItems = [
    {
      label: "ID (Auto)",
      name: "id",
      inputComponent: <Input className={styles.input}></Input>
    },
    {
      label: "Full name",
      name: "fullname",
      inputComponent: <Input className={styles.input}></Input>
    },
    {
      label: "Birth",
      name: "birth", 
      inputComponent: <DatePicker className={styles.datepicker} format="YYYY-MM-DD" />
    },
    {
      label: "Special",
      name: "special",
      inputComponent: <Input className={styles.input}></Input>
    },
    {
      label: "Year of experience",
      name: "year of experience",
      inputComponent: <Input className={styles.input}></Input>
    },
    {
      label: "Department",
      name: "department",
      inputComponent: <Input className={styles.input}></Input>
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
