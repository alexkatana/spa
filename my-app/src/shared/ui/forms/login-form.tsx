import type { FormProps } from 'antd' 
import { Button, Form, Input } from 'antd'

type FieldType = {
  username?: string
  password?: string
}

export const LoginForm = (props: FormProps) => { 
  return (
    <Form {...props} layout="vertical">
      <Form.Item<FieldType>
        label="Юзернейм"
        name="username"
        rules={[{ required: true, message: 'Напиши юз!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Напиши пароль!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
        Подтвердить
        </Button>
      </Form.Item>
    </Form>
  )
}