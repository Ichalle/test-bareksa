import { Calendar, DatePicker, Card } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React from 'react';

const FilterCalendar = () => {
  const onPanelChange = () => {
    console.log('TODO');
  };
  return (
    <Card className='p-0'>
      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        headerRender={() => {
          return (
            <div className='flex justify-between mb-2'>
              <div className='w-1/3 flex items-center'>
                <LeftOutlined />
                <DatePicker picker="month" bordered={false} suffixIcon="" />
                <RightOutlined />
              </div>
              <div className='w-1/3 flex items-center'>
                <LeftOutlined />
                <DatePicker picker="year" bordered={false} suffixIcon="" />
                <RightOutlined />
              </div>
            </div>
          )
        }}
      />
    </Card>
  )
};

export default FilterCalendar;