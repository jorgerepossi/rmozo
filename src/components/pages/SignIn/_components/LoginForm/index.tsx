import { useForm, Controller } from "react-hook-form";

import Box from "@/components/common/box";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Hooks
import useLoginFormHandler from "@/hooks/formHandlers/useLoginFormHandler";

// Types
import type { UserAuthLogin } from "@/types/auth";

const LoginForm = () => {
  const { control, handleSubmit } = useForm<UserAuthLogin>();
  const { handleOnSubmit } = useLoginFormHandler();

  return (
    <form
      className="flex w-full flex-col gap-8"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <Box className="flex flex-col gap-6">
        <Box className="flex flex-col gap-3">
          <Label htmlFor="username" className="text-neutral-n40">
            Username
          </Label>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input {...field} id="username" placeholder="@barryallen" />
            )}
          />
        </Box>
        <Box className="flex flex-col gap-3">
          <Label htmlFor="password" className="text-neutral-n40">
            Password
          </Label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                id="password"
                placeholder="******"
                type="password"
              />
            )}
          />
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
