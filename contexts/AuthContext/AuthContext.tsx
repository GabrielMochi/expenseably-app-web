import Authentication from "interfaces/Authentication";
import { createContext } from "react";

export type AuthContextProps = {
  isAuthenticated: boolean;
  isCheckingAuthentication: boolean;
  isLoggingOut: boolean;
  login: (authentication: Authentication) => Promise<void>;
  logout: () => Promise<void>;
};

export default createContext<AuthContextProps>({
  get isAuthenticated(): never {
    throw new Error("provide isAuthenticated property in AuthContext");
  },
  get isCheckingAuthentication(): never {
    throw new Error("provide isCheckingAuthentication property in AuthContext");
  },
  get isLoggingOut(): never {
    throw new Error("provide isLoggingOut property in AuthContext");
  },
  login(): never {
    throw new Error("provide login property in AuthContext");
  },
  logout(): never {
    throw new Error("provide logout property in AuthContext");
  },
});
