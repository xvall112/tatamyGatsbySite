import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
//components
import NextTournament from "./components/NextTournament";
import Hero from "./components/hero";
import Container from "../../components/Container";
import Container2 from "../../components/Container2";
import Title from "../../components/Title";
import SliderVideo from "./components/sliderVideo";
import SliderNews from "./components/sliderNews";
import SliderBlog from "./components/sliderBlog";

const Index = () => {
  return (
    <>
      <Container2>
        <Hero />
      </Container2>
      <Container>
        <NextTournament />
      </Container>
      <Container>
        <Title title={<Trans>Video</Trans>} />
        <SliderVideo />
      </Container>
      <Container>
        <Title title={<Trans>Novinky</Trans>} />
        <SliderNews />
      </Container>
      <Container>
        <Title title={<Trans>Blog</Trans>} />
        <SliderBlog />
      </Container>
    </>
  );
};

export default Index;
