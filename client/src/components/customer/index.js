import { useEffect, useState, useContext } from 'react';
import { Row } from 'antd';
import { AuthContext } from '../../context/authContext';
import 'antd/dist/antd.css';
import LayoutWrapper from '../Layout';
import './index.css';
import RewardCard from '../RewardCard';

export default function CustomerDashboard() {
  const authContext = useContext(AuthContext);
  const id = authContext?.authState?.id;
  const [rewardData, setRewardData] = useState([]);
  function getReward() {
    fetch(`/api/customer_rewards?customer_id=${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRewardData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getReward();
  }, []);
  return (
    <LayoutWrapper>
      <div className="customer-dashboard-parent">
        <div className="customer-parent-children">
          <Row>
            {rewardData?.map(({ current_reward, shop_name }) => (
              <RewardCard points={current_reward} shopName={shop_name} />
            ))}
          </Row>
        </div>
      </div>
    </LayoutWrapper>
  );
}
