import toast from "react-hot-toast";

import useAuthStore from "@/store/auth";

import type { UserAuthLogin } from "@/types/auth";

const useLoginFormHandler = () => {
  const { setLoginStatus } = useAuthStore();
  const handleOnSubmit = (data: UserAuthLogin) => {
    if (data.username === "@admin") {
      setLoginStatus("success");
      toast.success("Bienvenido");
    } else {
      toast.error("Error al iniciar sesión");
      setLoginStatus("error");
    }
    console.log(data);
  };

  return {
    handleOnSubmit,
  };
};
export default useLoginFormHandler;

export const useAuthLoginTranslate = () => {
  return {
    isRequired: "El campo es requerido",
    minLength: "El campo debe tener al menos 4 caracteres",
    maxLength: "El campo no debe tener mas de 20 caracteres",
    invalidFormat: "El campo tiene un formato invalido",
  };
};
