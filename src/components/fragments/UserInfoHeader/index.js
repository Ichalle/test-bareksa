import * as React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default function UserInfoHeader() {
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <span rel="noopener noreferrer">
              Todo Menu
            </span>
          ),
        }
      ]}
    />
  );

  return (
    <div className='flex items-center px-16' data-testid="info-user-header">
      <Avatar
        style={{
          color: '#000',
          backgroundColor: '#f4f4f4',
          fontWeight: 'bold',
        }}
      >
        RH
      </Avatar>

      <Dropdown overlay={menu}>
        <div className='px-4 flex items-center cursor-pointer'>
          <div className='mr-4'>
            <div className='font-bold text-base'>Reinhart H</div>
            <div className='text-xs text-gray-400'>Kemang, Jakarta</div>
          </div>
          <DownOutlined />
        </div>
      </Dropdown>
    </div>
  );
}