import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import {
  BrowserRouter as Router, Link, Routes, Route,
} from 'react-router-dom';
import LoginPage from './LoginPage';
import Queu from './Queu';
import CreateTicket from './CreateTicket';
import DeskPage from './Desk';
import { UiContext } from '../context/UiContext';

const { Content, Sider } = Layout;

const RouterPage = () => {
  const { hideMenu } = useContext(UiContext);

  return (

    <Router>

      <Layout style={{ minHeight: '100vh' }}>
        <Sider hidden={hideMenu} collapsedWidth="0" breakpoint="md">
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/login">
                Login
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/queu">
                Queu
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<DesktopOutlined />}>
              <Link to="/create">
                Create Ticket
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>

            <Routes>
              <Route path="login" element={<LoginPage />} />
              <Route path="queu" element={<Queu />} />
              <Route path="create" element={<CreateTicket />} />
              <Route path="desk" element={<DeskPage />} />
            </Routes>

          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
export default RouterPage;
