import React from 'react';
import { Button, Form, Input, Radio } from 'antd';

export const WeatherForm = ({onSearchHandler}) => {
  const [form] = Form.useForm();
  const radioOptions = [
    { label: '°C', value: 'metric' },
    { label: '°F', value: 'imperial' },
  ];

  const onFinish = (values) => {
    onSearchHandler(values);
  };

  return (
    <Form
      form={form}
      layout="inline"
      name="weather_search"
      onFinish={onFinish}
      role="search"
      initialValues={{ units: 'imperial' }}
    >
      <Form.Item
        label="Search"
        name="search"
        rules={[{ required: true, message: 'Please enter a search term!' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Units"
        name="units"
        rules={[{ required: true, message: 'Please enter units!' }]}
      >
        <Radio.Group
          options={radioOptions}
          optionType="button"
          buttonStyle="solid"
        />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
