import { DatePicker, Space } from 'antd';
import React from 'react';
const dateFormat = 'YYYY/MM/DD';

const FilterCalendar = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      open
      placement="bottomLeft"
      format={dateFormat}
    />
  </Space>
);

export default FilterCalendar;