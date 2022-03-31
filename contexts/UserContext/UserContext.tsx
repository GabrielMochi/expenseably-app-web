import Authentication from "interfaces/Authentication";
import User from "interfaces/User";
import { createContext } from "react";

export type UserContextProps = {
  user?: User;
  error?: unknown;
  isLoading: boolean;
  login: (authentication: Authentication) => Promise<void>;
  logout: () => Promise<void>;
};

export default createContext<UserContextProps>({
  get user(): never {
    throw new Error("provide user property in UserContext");
  },
  get error(): never {
    throw new Error("provide error property in UserContext");
  },
  get isLoading(): never {
    throw new Error("provide isLoading property in UserContext");
  },
  login(): never {
    throw new Error("provide login property in UserContext");
  },
  logout(): never {
    throw new Error("provide logout property in UserContext");
  },
});
