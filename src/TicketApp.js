import React from 'react';
import { SocketProvider } from './context/SocketContext';
import { UiProvider } from './context/UiContext';
import RouterPage from './pages/RouterPage';

const TicketApp = () => (

  <SocketProvider>
    <UiProvider>
      <RouterPage />
    </UiProvider>
  </SocketProvider>
);
export default TicketApp;
