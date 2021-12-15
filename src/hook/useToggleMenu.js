import { useContext, useEffect } from 'react';

import { UiContext } from '../context/UiContext';

const useToggleMenu = (hide = false) => {
  const { showMenu, hideToggleMenu } = useContext(UiContext);

  useEffect(() => {
    if (hide) {
      hideToggleMenu();
    } else {
      showMenu();
    }
  }, [hide]);
};

export default useToggleMenu;
