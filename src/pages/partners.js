import React, { useContext } from "react";
import { MenuContext } from "../Context/MenuContext";

const Partners = ({ location }) => {
  const { setPathname } = useContext(MenuContext);
  setPathname(location.pathname);
  return (
    <div>
      <h1>Partneri</h1>
    </div>
  );
};

export default Partners;
