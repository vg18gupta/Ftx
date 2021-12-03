import { useEffect, useContext, useState } from 'react';
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css';
import { AuthContext } from '../../context/authContext';
import './index.css';
import LayoutWrapper from '../Layout';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default function BusinessDashboard() {
  const [customerData, setCustomerData] = useState([])
  const authContext = useContext(AuthContext);
  console.log(authContext?.authState);
  const id = authContext?.authState?.id;
  function getcustomerData() {
    fetch(`/api/customers?business_id=${id}`,{
        headers: {
          'Content-Type': 'application/json'
        },
        method: "GET",
      })
      .then(res => {return res.json();})
      .then(data => {
        setCustomerData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  // function postTransaction() {
  //   const data = {
  //     "business_id": id,
  //     "customer_id": ,
  //     "redeem_amount": ,
  //     "transaction_amount": 
  //   }
  //   fetch('/api/register',
  //     {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(data)
  //     })
  //     .then(res => {
  //       getId();
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
  useEffect(()=>{
    getcustomerData();
  },[])
  return (
    <LayoutWrapper>
      <div className="customer-dashboard-parent">
        <div className="customer-parent-children">
          <Table columns={columns} dataSource={customerData} />
        </div>
      </div>
    </LayoutWrapper>
  );
}
