import { Button, Form, Input, Card, Col, Row, Typography, message } from "antd";
import axios from "axios";
import React from "react";
import { baseUrl } from "../config";
import captchaImg from "../assets/student.jpg";
import { Link } from 'react-router-dom';


function Login() {
  const [form] = Form.useForm();
  const { Title } = Typography;
  const characters = "qwertyuioplkjhgfdsamnzcvbvx123456789";


  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const captcha = generateString(6); // Function called here and save in captcha variable

  const handleSubmit = () => {
      form.validateFields().then((values) => {
        if(values.captchaCode === captcha){
          axios.post(`${baseUrl}/login`, values).then((res) => {
            localStorage.setItem("userId", res.data.data._id);
            localStorage.setItem("email", res.data.data.email);
            window.location.pathname='/'
            message.success("Login successfull");
          }).catch((error)=>{
            message.error(error.response.data)
          });
        }
        else{
          return(
            message.warning('Incorrect Captcha Code')
          )
        } 
      });
  };


  return (
    <Row gutter={0}>
      <Col span={8} />
      <Col span={8} >
        <Card title="Login">
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
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your Email!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Title level={4} style={{ marginTop: "12px", marginLeft: "1em", position: "absolute" }}>
              {captcha}
            </Title>
            <img src={captchaImg} height="50" style={{ textAlign:"left", marginBottom:10 }} />
            <Form.Item name="captchaCode" 
            rules={[
                { required: true, message: "Please input your captcha!" },
              ]}>
            <Input
              placeholder="Enter Captcha"
            />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
              <Button type="primary" htmlType="submit" style={{ width: "100%", marginTop:5}}>
                Submit
              </Button>
            </Form.Item>
            <Typography>Don't have an account?<Link to='/signup'>Create One</Link> </Typography>
            <Typography>Forgot Password?<Link to='/forgot-password'>Reset here</Link> </Typography>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

export default Login;
