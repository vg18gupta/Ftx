import { useState } from 'react';
import { Table, Input } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import LayoutWrapper from '../Layout';
import AddTransactionDialog from './AddTransactionDialog';

const columns = [
  {
    title: 'Customer ID',
    dataIndex: 'customerId',
    key: 'customerId',
  },
  {
    title: 'Current Reward Points',
    dataIndex: 'currentReward',
    key: 'currentReward',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.currentReward - b.currentReward,
  },
  {
    title: 'Total Reward Earned(till date)',
    key: 'totalRewardEarned',
    dataIndex: 'totalRewardEarned',
    sorter: (a, b) => a.totalRewardEarned - b.totalRewardEarned,
  },
  {
    title: 'Last Purchased Date',
    key: 'lastPurchasedDate',
    dataIndex: 'lastPurchasedDate',
    render: (val) => {
      return new Date(val).toLocaleDateString();
    },
    sorter: (a, b) => a.lastPurchasedDate - b.lastPurchasedDate,
  },
];

const data = [
  {
    key: '1',
    customerId: '8724056783',
    currentReward: 3000,
    totalRewardEarned: 15000,
    lastPurchasedDate: 1638555097729,
  },
  {
    key: '2',
    customerId: '8724236383',
    currentReward: 2000,
    totalRewardEarned: 10000,
    lastPurchasedDate: 1638555097725,
  },
  {
    key: '3',
    customerId: '7734054783',
    currentReward: 1800,
    totalRewardEarned: 7000,
    lastPurchasedDate: 1638535097729,
  },
  {
    key: '4',
    customerId: '8724056785',
    currentReward: 3300,
    totalRewardEarned: 15060,
    lastPurchasedDate: 1638555097829,
  },
  {
    key: '5',
    customerId: '7724856783',
    currentReward: 560,
    totalRewardEarned: 1000,
    lastPurchasedDate: 1638555027729,
  },
  {
    key: '6',
    customerId: '6728056783',
    currentReward: 301,
    totalRewardEarned: 3400,
    lastPurchasedDate: 1638555087729,
  },
  {
    key: '7',
    customerId: '8732056783',
    currentReward: 380,
    totalRewardEarned: 1000,
    lastPurchasedDate: 1638555097729,
  },
];

const customers = [
  {
    email: 'pling@gmail',
    id: 1,
    name: 'pling',
    phone: '9954199108',
    type: 'customer',
  },
  {
    email: 'cricket@gmail.com',
    id: 20,
    name: 'cricket@gmail.com',
    phone: '635469831245',
    type: 'Customer',
  },
];
export default function BusinessDashboard() {
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onSearch = (val) => {
    console.log(val);
    setSearchText(val);
  };
  const filteredData = data.filter((item) => {
    if (searchText && searchText.trim()) {
      return item.customerId.toLowerCase().includes(searchText.trim().toLowerCase());
    }
    return true;
  });
  return (
    <>
      {isModalVisible && (
        <AddTransactionDialog
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          onAddTransaction={() => {}}
          customersList={customers}
        />
      )}
      <LayoutWrapper setIsTxnModalVisible={setIsModalVisible}>
        <div className="customer-dashboard-parent">
          <div className="customer-parent-children">
            <Input.Search
              placeholder="Search customers"
              allowClear
              onChange={(e) => onSearch(e.target.value)}
              onSearch={onSearch}
              style={{ width: 185 }}
            />
            <Table columns={columns} dataSource={filteredData} />
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
}
