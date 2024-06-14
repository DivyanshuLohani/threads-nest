import { Dispatch, SetStateAction, createContext, useState } from "react";
import { ReactNode } from "react";
import { IThreadUser } from "../types/client";

interface AuthState extends IThreadUser {
  email: string;
}

export interface AuthContextValue {
  auth: AuthState | null;
  setAuth: Dispatch<SetStateAction<AuthState | null>>;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthState | null>(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
