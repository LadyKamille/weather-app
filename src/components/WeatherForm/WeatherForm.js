import React from 'react';
import { Button, Form, Input } from 'antd';

export const WeatherForm = ({onSearchHandler}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onSearchHandler(values.search);
  };

  return (
    <Form
      form={form}
      layout="inline"
      name="weather_search"
      onFinish={onFinish}
      role="search"
    >
      <Form.Item
        label="Search"
        name="search"
        rules={[{ required: true, message: 'Please enter a search term!' }]}
      >
        <Input/>
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
