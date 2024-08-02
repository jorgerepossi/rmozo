import { z } from "zod";

import type { Translate } from "@/types/translate";

const useLoginValidations = (translate: Translate) => {
  return z.object({
    username: z
      .string({
        required_error: `${translate.isRequired}`,
      })
      .regex(/^[0-9a-zA-Z@]+$/, {
        message: `${translate.invalidFormat}`,
      })
      .min(4, {
        message: `${translate.minLength}`,
      })
      .trim(),
    password: z
      .string({
        required_error: `${translate.isRequired}`,
      })
      .min(4, {
        message: `${translate.minLength}`,
      }),
  });
};

export default useLoginValidations;
