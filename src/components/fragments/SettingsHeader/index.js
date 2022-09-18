import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const SettingsHeader = () => (
  <Button type="text" shape="circle" data-testid="settings-header">
    <SettingOutlined
      style={{
        fontSize: 16,
      }}
    />
  </Button>
);

export default SettingsHeader;