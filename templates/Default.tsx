import React, { ReactElement, ReactNode } from "react";
import SplashScreen from "components/SplashScreen";
import Header from "components/Header";
import Main from "components/Main";

type Props = { children?: ReactNode };

const Default = ({ children }: Props): ReactElement => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <SplashScreen />
    </>
  );
};

export default Default;
