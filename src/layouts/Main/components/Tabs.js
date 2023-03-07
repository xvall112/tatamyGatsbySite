import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { graphql, useStaticQuery } from "gatsby";
import { Tabs, Tab } from "@mui/material";

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
  const { language, originalPath } = useI18next();
  const data = useStaticQuery(query);
  const { menu } = data.sanityOrganization;

  return (
    <>
      <Tabs
        value={originalPath}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable navigation"
        sx={{
          "& .MuiTabScrollButton-root": {
            /* backgroundColor: "rgba(0,0,0,.5)" */ width: "auto",
          },
        }}
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
