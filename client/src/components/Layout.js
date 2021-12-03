import React from 'react';
import { Layout } from 'antd';
import HeaderContent from './HeaderContent';
import './Layout.css';

const { Header, Footer, Content } = Layout;

const LayoutWrapper = ({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header className="header-sticky">
        <HeaderContent />
      </Header>
      <Content className="content">{children}</Content>
      <Footer className="footer">&copy; 2021 Rewardo</Footer>
    </Layout>
  );
};

export default LayoutWrapper;
