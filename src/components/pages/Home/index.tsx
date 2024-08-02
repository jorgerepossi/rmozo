// pages/Home.tsx
"use client";
import Box from "@/components/common/box";

// Hooks
import useAuth from "@/hooks/useAuth";

const HomePage = () => {
  const { isLogged } = useAuth();

  if (!isLogged) {
    return null;
  }

  return (
    <Box className={"h-[100dvh] bg-slate-50"}>
      <h1>Home Page</h1>
    </Box>
  );
};

export default HomePage;
