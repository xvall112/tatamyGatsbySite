import React, { useContext } from "react";
import { MenuContext } from "../Context/MenuContext";

const Organization = ({ location }) => {
  const { setPathname } = useContext(MenuContext);
  setPathname(location.pathname);
  return (
    <div>
      <h1>Organizace</h1>
    </div>
  );
};

export default Organization;
