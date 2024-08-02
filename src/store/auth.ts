import { create } from "zustand";
import { persist } from "zustand/middleware";

type UseAuthStore = {
  loginStatus: "idle" | "loading" | "success" | "error";
  setLoginStatus: (status: UseAuthStore["loginStatus"]) => void;
};

const useAuthStore = create<UseAuthStore>()(
  persist(
    (set) => ({
      loginStatus: "idle",
      setLoginStatus: (status) => set({ loginStatus: status }),
    }),
    {
      name: "auth",
    },
  ),
);

export default useAuthStore;
