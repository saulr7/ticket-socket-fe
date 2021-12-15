import React, { useState } from 'react';
import {
  Form, Input, Button, InputNumber, Typography,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { SaveOutlined } from '@ant-design/icons';
import getUser from '../services/getUser';

const { Title, Text } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();

  const [user] = useState(getUser());

  const onFinish = ({ username, desk }) => {
    localStorage.setItem('agent', username);
    localStorage.setItem('desk', desk);
    navigate('/desk');
  };

  if (user.agent && user.desk) {
    navigate('/desk');
  }

  return (
    <>
      <Title level={2}>Login </Title>
      <Text level={2}>Name and Desk</Text>
      <Form
        name="basic"
        labelCol={{
          span: 8,

        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Desk"
          name="desk"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            <SaveOutlined />
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginPage;
