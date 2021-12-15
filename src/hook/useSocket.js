import { useEffect, useMemo, useState } from 'react';
import io from 'socket.io-client';

const useSocket = (wsURL) => {
  const socket = useMemo(
    () => io(wsURL, { transports: ['websocket'] }),
    [wsURL],
  );
  const [online, setonline] = useState(false);

  useEffect(() => {
    setonline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on('connect', () => setonline(true));
  }, [socket]);

  useEffect(() => {
    socket.on('disconnect', () => setonline(false));
  }, [socket]);

  return {
    socket,
    online,
  };
};

export default useSocket;
