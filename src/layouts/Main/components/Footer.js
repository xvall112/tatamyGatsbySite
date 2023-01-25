import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Link, useI18next, Trans } from "gatsby-plugin-react-i18next";
//materialUi
import { useTheme } from "@mui/material/styles";
import { Grid, Box, Typography, Divider } from "@mui/material";
//component
import Container from "../../../components/Container";
import Social from "../../../components/Social";

export const query = graphql`
  query {
    sanityOrganization {
      email
      facebook
      instagram
      tel
      youtube
      menu {
        slug {
          current
        }
        title {
          cs
          en
        }
      }
      documents {
        name
        document {
          asset {
            url
          }
        }
      }
      aboutTatamy {
        cs
        en
      }
    }
  }
`;

const Footer = () => {
  const theme = useTheme();
  const data = useStaticQuery(query);
  const {
    email,
    facebook,
    instagram,
    tel,
    youtube,
    menu,
    documents,
    aboutTatamy,
  } = data.sanityOrganization;
  const { language } = useI18next();

  return (
    <>
      <Container>
        <Divider />
      </Container>
      <Container>
        <Grid container justifyContent="center" direction="row" spacing={4}>
          <Grid item xs={6} md={3}>
            <Box p={{ xs: 0, md: 2 }}>
              <StaticImage
                src="../../../images/footerLogo.png"
                alt="Foother logo Tatamy"
                placeholder="blurred"
                layout="constrained"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography align="center">
              {language === "cs" ? aboutTatamy.cs : aboutTatamy.en}
            </Typography>
            <Social
              linkYouTube={youtube}
              linkFacebook={facebook}
              linkInstagram={instagram}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography
              variant="h5"
              align="center"
              fontWeight="700"
              sx={{ mb: 1 }}
            >
              Menu
            </Typography>
            <Box
              component={"ul"}
              sx={{ listStyleType: "none", padding: "0px", margin: "auto 0" }}
            >
              {menu.map((item) => {
                return (
                  <Box
                    component={"li"}
                    sx={{ textAlign: "center", mb: 1 }}
                    key={item.title.cs}
                  >
                    <Typography
                      color="text.secondary"
                      component={Link}
                      to={item.slug.current}
                      sx={{ textDecoration: "none" }}
                    >
                      {language === "cs" ? item.title.cs : item.title.en}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              variant="h5"
              align="center"
              fontWeight="700"
              sx={{ mb: 1 }}
            >
              <Trans>Dokumenty ke stažení</Trans>
            </Typography>
            <Box
              component={"ul"}
              sx={{ listStyleType: "none", padding: "0px", margin: "auto 0" }}
            >
              {documents.map((item) => {
                return (
                  <Box
                    component={"li"}
                    sx={{ textAlign: "center", mb: 1 }}
                    key={item.name}
                  >
                    <Typography
                      color="text.secondary"
                      component={"a"}
                      href={item.document.asset.url}
                      sx={{ textDecoration: "none" }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        py={3}
        display="flex"
        flexDirection="column"
        sx={{ backgroundColor: "black" }}
      >
        <Typography
          color="text.primary"
          variant="subtitle2"
          component="a"
          align="center"
          href={`mailto: ${email}`}
        >
          {email}
        </Typography>
        <Typography
          color="text.primary"
          variant="subtitle2"
          align="center"
          component="a"
          href={`tel: ${tel}`}
        >
          {tel}
        </Typography>
        <Typography align="center">
          TATAMY © Všechna práva vyhrazena 2023
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
