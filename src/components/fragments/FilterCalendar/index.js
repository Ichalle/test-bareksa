import { Calendar, DatePicker, Card, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React from 'react';

const FilterCalendar = () => {
  const onPanelChange = () => {
    console.log('TODO');
  };
  return (
    <Card className='p-0' bodyStyle={{padding: 0}}>
      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        headerRender={() => {
          return (
            <div className='flex justify-between mb-2 p-4'>
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
      <div className='flex my-6 justify-center'>
        <Button className='mr-4'>
          Cancel
        </Button>
        <Button style={{backgroundColor: '#82C341'}}>
          Filter
        </Button>
      </div>
    </Card>
  )
};

export default FilterCalendar;