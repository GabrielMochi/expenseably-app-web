import React, { ReactElement } from "react";
import SplashScreen from "components/SplashScreen";
import Header from "components/Header";

const Default = (): ReactElement => {
  return (
    <>
      <Header />
      <SplashScreen />
    </>
  );
};

export default Default;
