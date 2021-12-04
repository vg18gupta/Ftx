import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import logo from '../Static/logo.png';
import { AuthContext } from '../context/authContext';
import './Header.css';
import { PlusOutlined } from '@ant-design/icons';

export default function Header({ setIsTxnModalVisible }) {
  const authContext = useContext(AuthContext);
  const url = window.location.href;
  const type = url.split('/')[3];
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item icon={<DownOutlined />} disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

  const [dropList, setDropList] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const setDrop = () => {
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        Hover me <DownOutlined />
      </a>
    </Dropdown>;
  };
  function handleModalClose() {
    setShowLogout(false);
  }
  return (
    <Row justify="space-between" align="middle">
      <a href="/">
        <img src={logo} alt="logo" height="40"></img>
      </a>
      <div>
        {type === 'business' && (
          <Button
            type="link"
            icon={<PlusOutlined />}
            style={{ color: '#51CC71', marginRight: '30px' }}
            onClick={() => setIsTxnModalVisible(true)}
          >
            Add New Transaction
          </Button>
        )}

        {!authContext.isAuthenticated() ? (
          <a href="/signup">
            <Button style={{ backgroundColor: '#51CC71', borderRadius: '5px' }} type="primary">
              Sign Up
            </Button>
          </a>
        ) : (
          <Avatar
            style={{ backgroundColor: '#00ff80' }}
            icon={<UserOutlined />}
            onClick={() => {
              setShowLogout(true);
            }}
          />
        )}
        {/* {
          showLogout && (<LogoutModal handleModalClose={handleModalClose}/>)
        } */}
      </div>
    </Row>
  );
}
