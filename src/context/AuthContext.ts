import { createContext } from "react";

interface AuthContextType {
  authStatus: string | null;
  setAuthStatus: (status: string) => void;
}

const AuthContext = createContext<AuthContextType>({
  authStatus: null,
  setAuthStatus: () => {},
});

export default AuthContext;
