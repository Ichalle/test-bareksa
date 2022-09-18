import React from 'react';
import PropTypes from 'prop-types';

import { Card, Button, DatePicker } from 'antd';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Chart from 'react-apexcharts';

ChartJS.register(ArcElement, Tooltip, Legend);

const { RangePicker } = DatePicker;

const LineChart = ({
  title,
  labels,
  data,
  type
}) => {
  const series = [{
    name: title,
    data: data
  }]

  const today = new Date()

  const options = {
    chart: {
      type: 'area',
      height: 100,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#789764'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    labels: labels,
    yaxis: {
      min: 0,
      max: 40000,
    },
    legend: {
      horizontalAlign: 'bottom'
    }
  }

  return (
    <div className=''>
      <Card>
        <div className='flex justify-between'>
          <h2 className='font-semibold'>{title}</h2>
          <RangePicker picker="month" />
        </div>
        <Chart
          options={options}
          series={series}
          type={type}
          height={200}
        />
      </Card>
    </div>
  )
}

export default LineChart;

LineChart.defaultProps = {
  title: '-',
  labels: [],
  data: [],
  type: 'area'
};

LineChart.propTypes = {
  title: PropTypes.string
}