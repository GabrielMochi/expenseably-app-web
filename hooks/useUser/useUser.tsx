import UserContext, { UserContextProps } from "contexts/UserContext";
import { useContext } from "react";

const useUser = (): UserContextProps => {
  const user = useContext(UserContext);
  return user;
};

export default useUser;
