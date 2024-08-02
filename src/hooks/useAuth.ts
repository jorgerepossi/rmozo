"use client";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

const useAuth = () => {
  const [loginStatus, setLoginStatus] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const status = localStorage.getItem("auth");
    setLoginStatus(status);

    if (status !== "success") {
      router.push("/signin");
    }
  }, [router]);

  return { isLogged: loginStatus === "success" };
};

export default useAuth;
