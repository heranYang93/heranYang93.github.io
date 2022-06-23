import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const NavbarBurgerProvider = ({ children }) => {
  const [navbarBurgerState, setNavbarBurgerState] = useState({
    expanded: false,
    buttonState: "navbar-burger",
    menu_display: "menu is-hidden",
  });

  const switchBurgerState = () => {
    if (navbarBurgerState.expanded) {
      setNavbarBurgerState({
        expanded: false,
        buttonState: "navbar-burger is-active",
        menu_display: "menu animate__animated animate__slideInRight",
      });
    } else if (!navbarBurgerState.expanded) {
      setNavbarBurgerState({
        expanded: true,
        buttonState: "navbar-burger",
        menu_display: "menu is-hidden",
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        navbarBurgerState,
        setNavbarBurgerState,
        switchBurgerState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useNavbarBurgerContext = () => {
  return useContext(AppContext);
};

export { AppContext, NavbarBurgerProvider };
