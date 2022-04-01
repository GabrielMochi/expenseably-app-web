import Authentication from "interfaces/Authentication";
import { createContext } from "react";

export type AuthContextProps = {
  isAuthenticated: boolean;
  isCheckingAuthentication: boolean;
  setIsCheckingAuthentication: (isCheckingAuthentication: boolean) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  login: (authentication: Authentication) => Promise<void>;
  logout: () => Promise<void>;
};

export default createContext<AuthContextProps>({
  get isAuthenticated(): never {
    throw new Error("provide isAuthenticated property in AuthContext");
  },
  setIsAuthenticated(): never {
    throw new Error("provide setIsAuthenticated property in AuthContext");
  },
  get isCheckingAuthentication(): never {
    throw new Error("provide isCheckingAuthentication property in AuthContext");
  },
  setIsCheckingAuthentication(): never {
    throw new Error("provide setIsCheckingAuthentication property in AuthContext");
  },
  login(): never {
    throw new Error("provide login property in AuthContext");
  },
  logout(): never {
    throw new Error("provide logout property in AuthContext");
  },
});
