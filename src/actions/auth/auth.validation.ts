import { z } from "zod";

export const loginValidation = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const registerValidation = z
  .object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });
