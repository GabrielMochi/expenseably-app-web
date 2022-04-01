import { ReactElement, ReactNode, useCallback, useEffect, useState } from "react";
import AuthContext, { AuthContextProps } from "contexts/AuthContext";
import { isAuthenticated as isAuthenticatedService } from "services/isAuthenticated";
import Authentication from "interfaces/Authentication";
import { login as loginService } from "services/login";
import { logout as logoutService } from "services/logout";

type Props = { children?: ReactNode };

export const AuthProvider = ({ children }: Props): ReactElement => {
  const [isAuthenticated, setIsAuthenticated] =
    useState<AuthContextProps["isAuthenticated"]>(false);

  const [isCheckingAuthentication, setIsCheckingAuthentication] =
    useState<AuthContextProps["isCheckingAuthentication"]>(true);

  const login = async (authentication: Authentication): Promise<void> => {
    try {
      await loginService(authentication);
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    await logoutService();
    setIsAuthenticated(false);
  };

  const handleAuthentication = useCallback(async (): Promise<void> => {
    setIsCheckingAuthentication(true);

    try {
      const authenticated = await isAuthenticatedService();
      setIsAuthenticated(authenticated);
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setIsCheckingAuthentication(false);
    }
  }, []);

  useEffect(() => {
    handleAuthentication();
  }, [handleAuthentication]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        isCheckingAuthentication,
        setIsCheckingAuthentication,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
