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
    }
  }

  return (
    <div className=''>
      <Card>
        <div className='flex justify-between'>
          <h2 className='font-semibold'>{title}</h2>
          <Button>...</Button>
        </div>
        <Chart
          options={options}
          series={series}
          type={type}
          width={260}
        />
      </Card>
    </div>
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