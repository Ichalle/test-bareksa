import React from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Badge, Button } from 'antd';

const NotificationsHeader = () => (
  <Button type="text" shape="circle" className='ml-6 mr-4' data-testid="notifications-header">
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