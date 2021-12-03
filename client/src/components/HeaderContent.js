import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from '../static/logo.png';
import './Header.css';

export default function Header() {
  const history = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + '=';
    var begin = dc.indexOf('; ' + prefix);
    if (begin === -1) {
      begin = dc.indexOf(prefix);
      if (begin !== 0) return null;
    } else {
      begin += 2;
      var end = document.cookie.indexOf(';', begin);
      if (end === -1) {
        end = dc.length;
      }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
  }

  useEffect(() => {
    var myCookie = JSON.parse(getCookie('user'));
    if (myCookie !== null) {
      setIsLoggedIn(myCookie.isLogedIn);
    }
  }, []);

  return (
    <Row justify="space-between" align="middle">
      <a href="/">
        <img src={logo} alt="logo" height="40"></img>
      </a>
      {!isLoggedIn ? (
        <a href="/signup">
          <Button type="primary">Sign Up</Button>
        </a>
      ) : (
        <Avatar style={{ backgroundColor: '#00ff80' }} icon={<UserOutlined />} />
      )}
    </Row>
  );
}
