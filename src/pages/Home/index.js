import { useState, useEffect } from 'react';
import { Col, Row } from 'antd';

import { ChartData, LineChart } from '../../components/fragments';
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
        <Col span={6} className="px-4">
          {
            !loadingFetch && (
              <ChartData
                title="Conversion"
                data={conversionValue}
                labels={conversionLabels}
                type="pie"
              />
            )
          }
        </Col>
        <Col span={6} className="px-4">
          <ChartData
            title="Users"
            data={[10, 20, 30]}
            labels={['cat#1', 'cat#2', 'cat#3']}
            type="pie"
          />
        </Col>
        <Col span={12} className="px-4">
          <LineChart
            title="Revenue"
            data={[11000, 11200, 11500, 11090, 11700, 11400, 11070]}
            labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Home;