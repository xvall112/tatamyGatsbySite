import React, { useState, useContext, createContext } from "react";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [pathname, setPathname] = React.useState("/");

  return (
    <MenuContext.Provider value={{ pathname, setPathname }}>
      {children}
    </MenuContext.Provider>
  );
}
