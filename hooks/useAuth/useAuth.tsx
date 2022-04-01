import AuthContext, { AuthContextProps } from "contexts/AuthContext";
import { useContext } from "react";

const useAuth = (): AuthContextProps => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
