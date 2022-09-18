import * as React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export default function Search() {

  return (
   <div>
    <Input size="large" placeholder="Search text" suffix={<SearchOutlined />} />
   </div>
  );
}