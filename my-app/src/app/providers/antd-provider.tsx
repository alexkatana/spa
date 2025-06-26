import React, { useEffect } from 'react';
import { ConfigProvider, theme, Layout } from 'antd';
import ruRU from 'antd/locale/ru_RU';

const { darkAlgorithm, defaultAlgorithm } = theme;
interface ThemeProviderProps {
  children: React.ReactNode;
  isDark: boolean;
}

export const AntdProvider: React.FC<ThemeProviderProps> = ({ children, isDark }) => {
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [isDark]);
  return (
    <ConfigProvider
      locale={ruRU}
      theme={{
        algorithm: isDark ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: '#00b96b',
          colorBgContainer: isDark ? '#1a1a1a' : '#ffffff',
          colorBgLayout: isDark ? '#000000' : '#f5f5f5',
          colorText: isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.88)',
        },
        components: {
          Layout: {
            headerBg: isDark ? '#141414' : '#ffffff',
            bodyBg: isDark ? '#000000' : '#ffffff',
          },
          Card: {
            colorBgContainer: isDark ? '#1d1d1d' : '#ffffff',
          },
          Input: {
            colorBgContainer: isDark ? '#1d1d1d' : '#ffffff',
          },
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', background: isDark ? '#000' : '#fff' }}>
        {children}
      </Layout>
    </ConfigProvider>
  );
};