import { Card, Row, Col } from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Customers with max un-redeemed points',
    },
  },
};
const ChartContainer = ({ data, customerDataMap }) => {
  const getChartData = (dataArr, key, barColor) => {
    const [labels, datapoints] = dataArr.reduce(
      ([labels, datapoints], item) => {
        labels.push(customerDataMap[item.customerId]?.phone);
        datapoints.push(item[key]);
        return [labels, datapoints];
      },
      [[], []],
    );
    const chartData = {
      labels,
      datasets: [
        {
          data: datapoints,
          backgroundColor: barColor,
        },
      ],
    };
    return chartData;
  };

  const getTopCustomersByRewardPoints = () => {
    return getChartData(
      data.sort((a, b) => a.current_reward - b.current_reward).slice(0, 5),
      'current_reward',
      '#1de4bd',
    );
  };
  const getTopCustomersByTransactions = () => {
    return getChartData(
      data.sort((a, b) => a.total_transactions - b.total_transactions).slice(0, 5),
      'total_transactions',
      '#1ac9e6',
    );
  };
  return (
    <Row gutter={20}>
      <Col span={12}>
        <Card>
          <Bar
            options={{
              responsive: true,
              plugins: {
                legend: false,
                title: {
                  display: true,
                  text: 'Top customers by un-redeemed points',
                },
              },
            }}
            data={getTopCustomersByRewardPoints()}
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Bar
            options={{
              responsive: true,
              plugins: {
                legend: false,
                title: {
                  display: true,
                  text: 'Top customers by transactions',
                },
              },
            }}
            data={getTopCustomersByTransactions()}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default ChartContainer;
