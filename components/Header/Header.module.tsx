import React, { ReactElement } from "react";
import HeaderElement from "./Header.element";
import useAuth from "hooks/useAuth";

const HeaderModule = (): ReactElement => {
  const { logout, isLoggingOut } = useAuth();

  return <HeaderElement logout={logout} isLoggingOut={isLoggingOut} />;
};

export default HeaderModule;
