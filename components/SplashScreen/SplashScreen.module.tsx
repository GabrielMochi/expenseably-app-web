import React, { ReactElement } from "react";
import SplashScreenElement from "./SplashScreen.element";
import useAuth from "hooks/useAuth";

const SplashScreenModule = (): ReactElement => {
  const { isCheckingAuthentication, isAuthenticated } = useAuth();

  if (isCheckingAuthentication) return <SplashScreenElement isLoading />;
  if (!isAuthenticated) return <SplashScreenElement showLoginForm />;

  return <></>;
};

export default SplashScreenModule;
