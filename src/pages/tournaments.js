import React, { useContext } from "react";
import { MenuContext } from "../Context/MenuContext";
//components
import Index from "../views/tournaments";

const Tournaments = ({ location }) => {
  const { setPathname } = useContext(MenuContext);
  setPathname(location.pathname);
  return <Index />;
};

export default Tournaments;

export const Head = () => <title>Tournaments</title>;
