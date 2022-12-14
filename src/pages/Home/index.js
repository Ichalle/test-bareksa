import { useState, useEffect } from 'react';
import { Col, Row } from 'antd';

import {
  ChartData,
  LineChart,
  TableData,
  FilterCalendar
} from '../../components/fragments';
import axios from '../../api/axios';

const DASHBOARD_URL = 'takehometest/web/dashboard'


const Home = () => {
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [orders, setOrders] = useState([]);
  const [conversionValue, setConversionValue] = useState({});
  const [conversionLabels, setConversionValueLabels] = useState({});

  useEffect(() => {
    fetchArticles()
	}, []);

  async function fetchArticles () {
		try {
      setLoadingFetch(true)
      const response = await axios.get(
        DASHBOARD_URL
      );
      const data = response.data?.data
      if (data) {
        setOrders(data.orders)
        setConversionValueLabels(Object.keys(data.user_category))
        const values = Object.values(data.user_category).map((i) => Number(i))
        setConversionValue(values)
      }
      setLoadingFetch(false)
		} catch (err) {
      setLoadingFetch(false)
		}
	}

  return (
    <div className='bg-white p-4'>
      <Row>
        <Col xs={24} md={6} className="mb-4 md:pr-2" data-testid="chart-data-conversion">
          {
            !loadingFetch && (
              <ChartData
                title="conversion"
                data={conversionValue}
                labels={conversionLabels}
                type="pie"
              />
            )
          }
        </Col>
        <Col xs={24} md={6} className="mb-4 md:pr-2" data-testid="chart-data-users">
          <ChartData
            title="users"
            data={[10, 20, 30]}
            labels={['cat#1', 'cat#2', 'cat#3']}
            type="pie"
          />
        </Col>
        <Col xs={24} md={12} className="mb-4" data-testid="chart-data-revenue">
          <LineChart
            title="Revenue"
            data={[11000, 2200, 11500, 21090, 11700, 11400, 11070]}
            labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
          />
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col xs={24} xl={7} className="mb-4">
          <FilterCalendar />
        </Col>
        <Col xs={24} xl={17} className="mb-4">
          <TableData
            title="Orders"
            data={orders}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Home;