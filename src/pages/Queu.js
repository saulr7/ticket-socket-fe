import React, { useContext, useEffect, useState } from 'react';

import {
  Row, Col, Typography, List, Card, Tag, Divider,
} from 'antd';
import { SocketContext } from '../context/SocketContext';
import getLasts from '../services/getLasts';

const { Title } = Typography;

const Queu = () => {
  const { socket } = useContext(SocketContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    getLasts().then(({ lasts }) => {
      setData(lasts);
    });
  }, []);

  useEffect(() => {
    socket.on('ticket-taken', ({ assigned }) => {
      setData(assigned);
    });

    return () => socket.off('ticket-taken;');
  }, [socket]);

  return (

    <>
      <Title level={1}> Client </Title>
      <Row style={{ marginTop: 100 }}>
        <Col span={12}>

          <List
            dataSource={data.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">
                      {item.agent}
                    </Tag>,
                    <Tag color="magenta">
                      Desk:
                      {item.desk}
                    </Tag>,
                  ]}
                >
                  <Title level={3}>
                    No:
                    {item.number}
                  </Title>

                </Card>
              </List.Item>
            )}
          />

        </Col>
        <Col span={12}>

          <Divider>  History </Divider>
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No: ${item.number}`}
                  description={`Desk: ${item.desk}`}
                />

              </List.Item>
            )}
          />

        </Col>
      </Row>

    </>

  );
};

export default Queu;
