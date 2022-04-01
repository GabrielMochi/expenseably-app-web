import User from "interfaces/User";
import { createContext } from "react";

export type UserContextProps = {
  user?: User;
  error?: unknown;
  isLoading: boolean;
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
});
