import React from 'react';
import PropTypes from 'prop-types';
import { Table, Tag } from 'antd';
import moment from 'moment';
import {tagColor} from '../../../utils/convertColor'

const TableData = ({
  title,
  data
}) => {
  const columns = [
    {
      title: 'Order Number',
      dataIndex: 'order_id',
      key: 'order_id',
      render: (text) => <p className='line-clamp-1'>#{text}</p>
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) =>
        <Tag
          color={tagColor(status)}
          className='capitalize'
        >
          { status }
        </Tag>
    },
    {
      title: 'Operator',
      dataIndex: 'full_name',
      key: 'full_name',
      render: (text) => <p className='line-clamp-1'>{text}</p>
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      render: (text) => <p className='line-clamp-1'>{text}</p>
    },
    {
      title: 'Start Date',
      dataIndex: 'start_date',
      key: 'start_date',
      render: (date) => <p className='line-clamp-1'>{moment(date).format('DD/MM/YY HH:mm')}</p>
    },
    {
      title: 'Due Date',
      dataIndex: 'due_date',
      key: 'due_date',
      render: (date) => <p className='line-clamp-1'>{moment(date).format('DD/MM/YY HH:mm')}</p>
    }
  ];

  return (
    <div className='w-full overflow-x-auto md:pl-4'>
      <h2 className='font-bold'>{title}</h2>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: [] }}
        size="small"
      />
    </div>
  )
}

export default TableData;

TableData.defaultProps = {
  title: '-'
};

TableData.propTypes = {
  title: PropTypes.string
}