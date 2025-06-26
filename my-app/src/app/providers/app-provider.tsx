import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'
import { StoreProvider } from './store-provider'
import { QueryProvider } from './query-provider'
import { AntdProvider } from './antd-provider'
import { ThemeToggle } from '../../shared/ui/theme-toggle'
export const App = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  return (
    <BrowserRouter>
      <StoreProvider>
        <QueryProvider>
          <AntdProvider isDark={isDark}>
            <div style={{ 
              position: 'fixed', 
              top: 20, 
              right: 20, 
              zIndex: 1000 
            }}>
              <ThemeToggle 
                isDark={isDark} 
                onToggle={() => {
                  setIsDark(!isDark);
                  localStorage.setItem('theme', !isDark ? 'dark' : 'light');
                }} 
              />
            </div>
            <AppRouter />
          </AntdProvider>
        </QueryProvider>
      </StoreProvider>
    </BrowserRouter>
  );
};


