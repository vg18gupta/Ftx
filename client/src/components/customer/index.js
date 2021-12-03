import { useEffect, useState, useContext } from 'react';
import { Card, Col, Row } from 'antd';
import { TrophyOutlined, ShopOutlined, DollarCircleOutlined } from '@ant-design/icons'
import { AuthContext } from '../../context/authContext';
import 'antd/dist/antd.css';
import LayoutWrapper from '../Layout';
import './index.css';

export default function CustomerDashboard() {
  const authContext = useContext(AuthContext);
  const id = authContext?.authState?.id;
  const [ rewardData, setRewardData ] = useState([])
  function getReward() {
    fetch(`/api/customer_rewards?customer_id=${id}`,{
        headers: {
          'Content-Type': 'application/json'
        },
        method: "GET",
      })
      .then(res => {return res.json();})
      .then(data => {
        setRewardData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    getReward();
  }, [])
  return (
    <LayoutWrapper>
      <div className="customer-dashboard-parent">
        <div className="customer-parent-children">
          {/* <div className="site-card-wrapper">
            <Row gutter={16}>
              {
                rewardData?.map((item, index) => {
                  console.log(item)
                  return (
                    <Col span={8} key={index}>
                      <Card title={item.shop_name} bordered={false}>
                        {item.current_reward}
                        <TrophyOutlined />
                      </Card>
                    </Col>
                  )
                })
              }
            </Row>
          </div> */}
          <div className="site-card-wrapper">
          {
            rewardData?.map((item, index) => {
                  console.log(item)
                  return (
                    <Row gutter={16} style={{ minWidth: "0px", marginRight: "90px"}}>
                      <Card
                        hoverable
                      >
                        <ShopOutlined style={{ width: 250 }}/>
                        <Card title={item.shop_name} bordered={false}>
                          <div className="card-reward-parent">
                            {item.current_reward}
                            <TrophyOutlined />
                          </div>
                        </Card>
                        <Card bordered={false}>
                          <div className="card-reward-parent">
                            {item.total_cash_earned}
                            <DollarCircleOutlined />
                          </div>
                        </Card>
                      </Card>
                    </Row>
                  )
                })
          }
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
