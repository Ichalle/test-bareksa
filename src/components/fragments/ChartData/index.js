import React from 'react';
import PropTypes from 'prop-types';

import { Card, Button } from 'antd';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Chart from 'react-apexcharts';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartData = ({
  title,
  labels,
  data,
  type
}) => {
  const series = data
  const options = {
    labels: labels,
    legend: {
      position: 'bottom'
    },
    colors: ['#725E9C', '#5C8F94', '#EBA45E', '#E4EAEB'],
    dataLabels: {
      enabled: false
    }
  }

  return (
    <Card className='h-full'>
      <div className='flex justify-between'>
        <h2 className='font-bold text-2xl capitalize'>{title}</h2>
        <Button size="small">...</Button>
      </div>
      <div className='flex justify-center'>
        <Chart
          options={options}
          series={series}
          type={type}
          width={260}
        />
      </div>
    </Card>
  )
}

export default ChartData;

ChartData.defaultProps = {
  title: '-',
  labels: [],
  data: [],
  type: 'pie'
};

ChartData.propTypes = {
  title: PropTypes.string
}