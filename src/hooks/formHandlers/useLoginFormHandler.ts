import { useRouter } from "next/navigation";

import type { UserAuthLogin } from "@/types/auth";

const useLoginFormHandler = () => {
  const router = useRouter();
  const handleOnSubmit = (data: UserAuthLogin) => {
    if (data.username === "admin") {
      router.push("/dashboard");
    }
    console.log(data);
  };

  return {
    handleOnSubmit,
  };
};
export default useLoginFormHandler;
