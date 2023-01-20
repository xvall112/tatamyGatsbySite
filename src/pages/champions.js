import React, { useContext } from "react";
import { MenuContext } from "../Context/MenuContext";
import Index from "../views/champions";

const Champions = ({ location }) => {
  const { setPathname } = useContext(MenuContext);
  setPathname(location.pathname);
  return (
    <div>
      <Index />
    </div>
  );
};

export default Champions;
