import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const SettingsHeader = () => (
  <Button type="text" shape="circle" className='mx-2'>
    <SettingOutlined
      style={{
        fontSize: 16,
      }}
    />
  </Button>
);

export default SettingsHeader;