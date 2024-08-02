import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";

// Components
import Box from "@/components/common/box";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Hooks
import useLoginFormHandler, {
  useAuthLoginTranslate,
} from "@/hooks/formHandlers/useLoginFormHandler";

// Types
import type { UserAuthLogin } from "@/types/auth";

// Utils
import useLoginValidations from "@/utils/validations/useLogin.validations";

const LoginForm = () => {
  const translate = useAuthLoginTranslate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserAuthLogin>({
    resolver: zodResolver(useLoginValidations(translate)),
    mode: "onChange",
  });
  const { handleOnSubmit } = useLoginFormHandler();

  return (
    <form
      className="flex w-full flex-col gap-8"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <Box className="flex flex-col gap-6">
        <Box className="flex flex-col gap-3">
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder="@barryallen"
                type={"text"}
                label={"Username"}
                className={`${errors.username && "border-red-500 focus-visible:outline-red-500"}`}
              />
            )}
          />
          {errors.username && (
            <p className="text-sm text-red-600">{errors.username.message}</p>
          )}
        </Box>
        <Box className="flex flex-col gap-3">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder="******"
                type="password"
                label={"Password"}
                className={`${errors.password && "border-red-500 focus-visible:outline-red-500"}`}
              />
            )}
          />
          {errors.password && (
            <p className="text-sm text-red-600">{errors.password.message}</p>
          )}
        </Box>
      </Box>
      <Box className="flex flex-col gap-4">
        <Button type="submit">Sign In</Button>
        <p className="text-xs text-neutral-n50">
          Don’t have an account?{" "}
          <span className="text-neutral-n60">Sign Up</span>
        </p>
      </Box>
    </form>
  );
};

export default LoginForm;
