import React, { createContext } from 'react';
import { wsURL } from '../constants';
import useSocket from '../hook/useSocket';

const SocketContext = createContext(null);
// eslint-disable-next-line react/prop-types
const SocketProvider = ({ children }) => {
  const { socket, online } = useSocket(wsURL);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
