import React, { useContext, useState } from 'react';

import {
  Row, Col, Typography, Button, Divider,
} from 'antd';
import useToggleMenu from '../hook/useToggleMenu';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;

const CreateTicket = () => {
  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState({});

  useToggleMenu(true);

  const takeTicket = () => {
    socket.emit('request-ticket', null, (res) => {
      setTicket(res);
    });
  };

  return (

    <div>
      <Row style={{ marginTop: 100 }}>
        <Col offset={6} span={14} align="center">
          <Title level={3}> Click the Button </Title>
          <Button
            type="primary"
            shape="round"
            size="large"
            onClick={takeTicket}
          >
            Ticket

          </Button>
        </Col>
      </Row>

      <Divider />

      {
        ticket && (

        <Row style={{ marginTop: 100 }}>
          <Col offset={6} span={14} align="center">
            <Text level={2}> Your number</Text>
            <br />
            <Text style={{ fontSize: 55 }} type="success" level={2}>
              {ticket.number}
            </Text>

          </Col>
        </Row>
        )
      }

    </div>
  );
};

export default CreateTicket;
