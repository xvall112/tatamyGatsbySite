import React, { useState, useContext, createContext } from "react";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [pathname, setPathname] = useState("/");
  const [language, setLanguage] = useState("cs");

  return (
    <MenuContext.Provider
      value={{ pathname, setPathname, language, setLanguage }}
    >
      {children}
    </MenuContext.Provider>
  );
}
