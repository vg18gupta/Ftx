import React from 'react';
import { Layout } from 'antd';
import HeaderContent from './HeaderContent';
import './Layout.css';

const { Header, Footer, Content } = Layout;

const LayoutWrapper = ({ children, setIsTxnModalVisible }) => {
  return (
    <Layout>
      <Header className="header-sticky">
        <HeaderContent setIsTxnModalVisible={setIsTxnModalVisible} />
      </Header>
      <Content className="content">{children}</Content>
      {/* <Footer style={{marginTop:'auto'}} className="footer">&copy; 2021 Rewardo</Footer> */}
    </Layout>
  );
};

export default LayoutWrapper;
