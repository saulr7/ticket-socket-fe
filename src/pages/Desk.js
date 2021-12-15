import React, { useContext, useState } from 'react';

import {
  Row, Col, Typography, Button, Divider,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import useToggleMenu from '../hook/useToggleMenu';
import getUser, { logOutService } from '../services/getUser';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;

const DeskPage = () => {
  useToggleMenu(false);
  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState({});
  const navigate = useNavigate();
  const [user] = useState(getUser());

  const logOut = () => {
    logOutService();
    navigate('/login');
  };

  const nextTicket = () => {
    socket.emit('next-ticket', user, (res) => {
      if (res) {
        setTicket(res);
      }
    });
  };

  if (!user.agent || !user.desk) {
    navigate('/login');
  }

  return (
    <div style={{ margin: 30 }}>
      <Row>

        <Col span={20}>
          <Title level={2}>
            {user.agent}
          </Title>
          <Text> Youre using </Text>
          <Text type="success">
            {user.desk}
          </Text>
        </Col>
        <Col span={4} align="right">
          <Button
            onClick={logOut}
            shape="round"
            type="danger"
          >
            Log Out
          </Button>
        </Col>

      </Row>

      <Divider />

      {ticket && (

      <Row>

        <Col span={20}>
          <Text> Working on </Text>
          <Text
            style={{ fontSize: 20 }}
            type="danger"

          >
            {ticket.number}
          </Text>
        </Col>

      </Row>
      )}

      <Row>

        <Col offset={18} span={6} align="right">
          <Button
            onClick={nextTicket}
            shape="round"
            type="primary"
          >
            Next
          </Button>
        </Col>

      </Row>

    </div>
  );
};

export default DeskPage;
