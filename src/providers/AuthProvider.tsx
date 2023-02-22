import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useNavigate, NavigateOptions, To } from 'react-router-dom';
import { UserTypes } from 'interfaces';

interface AuthTypes {
  isLoading: boolean;
  navigate: (to: To, options?: NavigateOptions | undefined) => void;
  logout: () => void;
  user: UserTypes | undefined;
  setUser: (thisUser: UserTypes) => void;
}

const AuthContext = createContext<AuthTypes>({} as AuthTypes);

const AuthProvider = ({ children }: { children?: ReactNode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserTypes | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const logout = () => {
    setUser(undefined);
    navigate('/login');
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        navigate,
        logout,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export const ProtectRoute = ({ children }: { children?: ReactNode }) => {
  const { isLoading } = useAuthContext();
  if (isLoading) return <div>Loading...</div>;
  return <>{children}</>;
};

export { AuthProvider, useAuthContext, AuthContext };
