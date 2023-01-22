import React, { useContext } from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { graphql, useStaticQuery } from "gatsby";
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
  const { language } = useI18next();
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
              key={item.slug.current}
              label={language === "cs" ? item.title.cs : item.title.en}
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
