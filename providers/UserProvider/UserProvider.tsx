import AuthContext from "contexts/AuthContext";
import UserContext, { UserContextProps } from "contexts/UserContext";
import { ReactElement, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { getUser } from "services/getUser";

type Props = { children?: ReactNode };

const UserProvider = ({ children }: Props): ReactElement => {
  const [userState, setUserState] = useState<UserContextProps>({ isLoading: true });
  const { isAuthenticated, isCheckingAuthentication } = useContext(AuthContext);

  const loadUser = async (): Promise<void> => {
    try {
      const user = await getUser();
      setUserState({ user, isLoading: false });
    } catch (error) {
      setUserState({ error, isLoading: false });
    }
  };

  const unloadUser = (): void => {
    setUserState({ user: undefined, error: undefined, isLoading: false });
  };

  const handleUserAuthentication = useCallback((): void => {
    if (isCheckingAuthentication) return;

    if (isAuthenticated) {
      loadUser();
      return;
    }

    unloadUser();
  }, [isCheckingAuthentication, isAuthenticated]);

  useEffect(() => {
    handleUserAuthentication();
  }, [handleUserAuthentication]);

  return <UserContext.Provider value={userState}>{children}</UserContext.Provider>;
};

export default UserProvider;
