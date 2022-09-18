import { useState } from 'react';
import PropTypes from 'prop-types';

import { Card, DatePicker } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Chart from 'react-apexcharts';
import { sumArray } from '../../../utils/convertNumber'

ChartJS.register(ArcElement, Tooltip, Legend);

const { RangePicker } = DatePicker;

const LineChart = ({
  title,
  labels,
  data,
  type
}) => {
  const [profitLoss] = useState('7,00')
  const series = [{
    name: title,
    data: data
  }]

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
          <h2 className='font-bold'>{title}</h2>
          <RangePicker picker="month" />
        </div>
        <Chart
          options={options}
          series={series}
          type={type}
          height={200}
        />
        <div>Total Revenue</div>
        <p className='font-bold text-xl mb-2'>
          ${sumArray(data)}
        </p>
        <div className='text-green-400 flex items-center'>
          <ArrowUpOutlined />
          <span>{profitLoss}%</span>
        </div>
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