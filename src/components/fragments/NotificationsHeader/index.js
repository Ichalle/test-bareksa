import React from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Badge, Button } from 'antd';

const NotificationsHeader = () => (
  <Button type="text" shape="circle" className='mx-4'>
    <Badge dot>
      <BellOutlined
        style={{
          fontSize: 16,
        }}
      />
    </Badge>
  </Button>
);

export default NotificationsHeader;