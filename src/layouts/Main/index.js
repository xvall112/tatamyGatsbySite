import React from "react";
//components
import Header from "./components/Header";
import Footer from "./components/Footer";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "50vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Main;
