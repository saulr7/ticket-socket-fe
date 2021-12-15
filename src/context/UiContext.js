import React, { createContext, useState } from 'react';

export const UiContext = createContext();

// eslint-disable-next-line react/prop-types
export const UiProvider = ({ children }) => {
  const [hideMenu, setHideMenu] = useState(false);

  const showMenu = () => {
    setHideMenu(false);
  };

  const hideToggleMenu = () => {
    setHideMenu(true);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UiContext.Provider value={{ hideMenu, showMenu, hideToggleMenu }}>
      {children}
    </UiContext.Provider>
  );
};
