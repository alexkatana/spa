import { useGetExampleQuery } from '../model/api'
import { LoginForm } from '../../../shared/ui/forms/login-form'
import { Spin } from 'antd'

export const MainPage = () => {
  
  const { data, isLoading } = useGetExampleQuery('123')
  
  const onFinish = (values: unknown) => {
    console.log('Success:', values)
  }

  return (
    <div className="page-container">
      <h1>Главная страница</h1>
      <LoginForm onFinish={onFinish} />
      
      <div className="data-container">
        {isLoading ? (
          <Spin size="large" />
        ) : (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>
    </div>
  )
}