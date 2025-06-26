import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'
import { StoreProvider } from './store-provider'
import { QueryProvider } from './query-provider'
import { AntdProvider } from './antd-provider'

export const App = () => {
  return (
    <BrowserRouter>
      <StoreProvider>
        <QueryProvider>
          <AntdProvider>
            <AppRouter />
          </AntdProvider>
        </QueryProvider>
      </StoreProvider>
    </BrowserRouter>
  )
}