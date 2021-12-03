import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from '../Static/logo.png';
import { AuthContext } from '../context/authContext';
import './Header.css';

export default function Header() {
  const authContext = useContext(AuthContext);

  return (
    <Row justify="space-between" align="middle">
      <a href="/">
        <img src={logo} alt="logo" height="40"></img>
      </a>
      {!authContext.isAuthenticated() ? (
        <a href="/signup">
          <Button style={{backgroundColor: "#51CC71", borderRadius: "10px"}} type="primary">Sign Up</Button>
        </a>
      ) : (
        <Avatar style={{ backgroundColor: '#00ff80' }} icon={<UserOutlined />} />
      )}
    </Row>
  );
}
