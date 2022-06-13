import React from "react";
import { useLocation } from "react-router-dom";
import { Button, Form, Input, Card, Col, Row, Typography, message } from "antd";
import axios from 'axios';
import { baseUrl } from "../config";


function ResetPassword() {
  const params = useLocation().search;
  const id = new URLSearchParams(params).get("id");
  const token = new URLSearchParams(params).get("token");

  const [form] = Form.useForm();
  const { Title } = Typography;

  const handleSubmit = () => {
    form.validateFields().then((values) => {
        if(values.password === values.cpassword){
            axios.post(`${baseUrl}/resetPassword`, {password: values.password, id: id, token: token} ).then((res) => {
                message.success("Password has been reset successfully");
                window.location.pathname='/login'
              }).catch((error)=>{
                message.error(error.response.data)
              });
        }else{
            message.error("Password not matched")
        }
        
    });
};



  return (
    <Row gutter={0}>
      <Col span={8} />
      <Col span={8}>
        <Card title="Reset Password">
          <Form
            form={form}
            layout="vertical"
            name="basic"
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            autoComplete="off"
          >
            <Form.Item
              label="New Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="cpassword"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            
            <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%", marginTop: 5 }}
              >
                Submit
              </Button>
            </Form.Item>
            
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

export default ResetPassword;
