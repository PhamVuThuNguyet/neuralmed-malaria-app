import { React} from "react";
import { Button, Input, Form, DatePicker } from "antd";
import axios from 'axios';
import styles from "../../styles/AdminConsole/adminconsole-doctor-register.module.scss";

const DoctorRegister = () => {
  const [form] = Form.useForm();
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
      <div className={styles.text}>
        <Form form={form} onFinish={onFinish} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} layout="vertical">
        <Form.Item 
          label={<label style={{ color: "white" }}>ID (Auto)</label>}
          name="id"
          style={{
            color: "white"
          }}
          rules={[
            {
              required: true,
              message: 'Please enter id',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<label style={{ color: "white" }}>Full name</label>}
          name="fullname"
          rules={[
            {
              required: true,
              message: 'Please enter fullname',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<label style={{ color: "white" }}>Birth</label>}
          name="birth"
          rules={[
            {
              required: true,
              message: 'Please select birth',
            },
          ]}
        >
           <DatePicker style={{ width: '100%' }} format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item
          label={<label style={{ color: "white" }}>Special</label>}
          name="special"
          rules={[
            {
              required: true,
              message: 'Please enter special',
            },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label={<label style={{ color: "white" }}>Year of experience</label>}
          name="year of experience"
          rules={[
            {
              required: true,
              message: 'Please enter year of experience',
            },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label={<label style={{ color: "white" }}>Department</label>}
          name="department"
          rules={[
            {
              required: true,
              message: 'Please enter department',
            },
          ]}
        >
          <Input/>
        </Form.Item>
  
        <Form.Item wrapperCol={{ span: 24, offset: 15 }}>
          <div className={styles.button}>
            <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{
            width: 174,
            }}
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