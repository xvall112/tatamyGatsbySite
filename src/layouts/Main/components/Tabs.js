import React, { useContext } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
//context
import { MenuContext } from "../../../Context/MenuContext";

export const query = graphql`
  query {
    sanityOrganization {
      menu {
        slug {
          current
        }
        title {
          cs
          en
        }
      }
    }
  }
`;

const Menu = () => {
  const data = useStaticQuery(query);
  const { menu } = data.sanityOrganization;
  const { pathname } = useContext(MenuContext);
  const [value, setValue] = React.useState(pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs
        value={pathname}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        {menu.map((item) => {
          return (
            <Tab
              label={item.title.cs}
              value={item.slug.current}
              to={item.slug.current}
              component={Link}
              sx={{ fontWeight: 700, fontSize: "16px" }}
            />
          );
        })}
      </Tabs>
    </>
  );
};

export default Menu;
