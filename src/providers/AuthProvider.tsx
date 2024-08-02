"use client";
import { useState, useEffect } from "react";

import AuthContext from "@/context/AuthContext";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authStatus, setAuthStatus] = useState<string | null>(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      setAuthStatus(storedAuth);
    }
  }, []);

  const value = {
    authStatus,
    setAuthStatus: (status: string) => {
      localStorage.setItem("auth", status);
      setAuthStatus(status);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
