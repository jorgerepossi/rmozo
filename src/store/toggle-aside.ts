import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ToggleAsideProps {
  isAsideOpen: boolean;
  toggleAside: () => void;
}

const useToggleAside = create<ToggleAsideProps>()(
  persist(
    (set) => ({
      isAsideOpen: false,
      toggleAside: () => set((state) => ({ isAsideOpen: !state.isAsideOpen })),
    }),
    { name: "toggle-aside" },
  ),
);

export default useToggleAside;
