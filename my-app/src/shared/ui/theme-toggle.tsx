import React from 'react';
import { Switch, Space } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';

type ThemeToggleProps = {
  isDark: boolean;
  onToggle: () => void;
};

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => (
  <Space>
    <SunOutlined />
    <Switch 
      checked={isDark} 
      onChange={onToggle}
    />
    <MoonOutlined />
  </Space>
);