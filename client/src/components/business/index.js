import { useState, useEffect, useContext } from 'react';
import { Table, Input, message, Row, Spin } from 'antd';
import 'antd/dist/antd.css';
import { AuthContext } from '../../context/authContext';
import './index.css';
import LayoutWrapper from '../Layout';
import AddTransactionDialog from './AddTransactionDialog';
import { openErrorNotification, openSuccessNotification } from '../Notification';
import ChartContainer from './ChartContainer';

const BusinessDashboard = () => {
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [customerData, setCustomerData] = useState([]);
  const [allcustomerData, setallCustomerData] = useState([]);
  const [allcustomerDataMap, setallCustomerDataMap] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isTransactionLoading, setIsTransactionLoading] = useState(false);

  const authContext = useContext(AuthContext);
  const id = authContext?.authState?.id;

  const columns = [
    {
      title: 'Customer ID',
      dataIndex: 'customerId',
      key: 'customerId',
      render: (val) => {
        return allcustomerDataMap[val]?.phone;
      },
    },
    {
      title: 'Current Reward Points',
      dataIndex: 'current_reward',
      key: 'current_reward',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.current_reward - b.current_reward,
    },
    {
      title: 'Total Reward Earned(till date)',
      key: 'total_reward_earned',
      dataIndex: 'total_reward_earned',
      sorter: (a, b) => a.total_reward_earned - b.total_reward_earned,
    },
    {
      title: 'Last Purchased Date',
      key: 'last_purchased_date',
      dataIndex: 'last_purchased_date',
      render: (val) => {
        return new Date(val).toLocaleDateString();
      },
      sorter: (a, b) =>
        new Date(a.last_purchased_date).valueOf() - new Date(b.last_purchased_date).valueOf(),
    },
  ];

  function getcustomerData() {
    return fetch(`/api/customers?business_id=${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCustomerData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function getallcustomerData() {
    return fetch(`/api/global_customers?business_id=${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setallCustomerDataMap(
          data.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
          }, {}),
        );
        setallCustomerData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //add transaction API
  function postTransaction(value) {
    const data = {
      business_id: id,
      customer_id: value.id,
      redeem_amount: value.redeemAmount,
      transaction_amount: value.transactionAmount,
    };
    setIsTransactionLoading(true);
    fetch('/api/add_transaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => {
        // getId();
        if (!res.ok) {
          return Promise.reject(res);
        }
        loadData();
        openSuccessNotification('Transaction added succesfully💸');
        setIsModalVisible(false);
      })
      .catch((err) => {
        openErrorNotification('Failed to add transaction, please try again🛠');
      })
      .finally(() => setIsTransactionLoading(false));
  }
  const loadData = async () => {
    setIsLoading(true);
    try {
      await Promise.all[(getcustomerData(), getallcustomerData())];
    } catch (e) {
      openErrorNotification('Failed to load data, please try again');
    }
    setIsLoading(false);
  };
  useEffect(() => {
    loadData();
  }, []);

  const onSearch = (val) => {
    console.log(val);
    setSearchText(val);
  };
  const filteredData = customerData.filter((item) => {
    if (searchText && searchText.trim()) {
      return allcustomerDataMap[item.customerId]?.phone
        .toLowerCase()
        .includes(searchText.trim().toLowerCase());
    }
    return true;
  });
  if (isLoading) {
    return (
      <Row style={{ paddingTop: '200px' }} justify="center">
        <Spin />
      </Row>
    );
  }
  return (
    <>
      {isModalVisible && (
        <AddTransactionDialog
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          onAddTransaction={postTransaction}
          customersList={allcustomerData}
          updateCustomersList={getallcustomerData}
          isLoading={isTransactionLoading}
        />
      )}

      <LayoutWrapper setIsTxnModalVisible={setIsModalVisible}>
        <div className="customer-dashboard-parent">
          <div className="customer-parent-children">
            <div style={{ marginBottom: '40px' }}>
              <ChartContainer data={customerData} customerDataMap={allcustomerDataMap} />
            </div>
            <Input.Search
              placeholder="Search customers"
              allowClear
              onChange={(e) => onSearch(e.target.value)}
              onSearch={onSearch}
              style={{ width: 185 }}
            />
            <Table columns={columns} dataSource={filteredData} loading={isLoading} />
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
};

export default BusinessDashboard;
