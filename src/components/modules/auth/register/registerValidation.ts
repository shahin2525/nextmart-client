import { z } from "zod";

export const registrationSchema = z.object({
  name: z
    .string({ required_error: "name is required" })
    .min(2, "name min character will be 2")
    .max(40, "name max character will be 50"),
  email: z
    .string({ required_error: "email is required" })
    .email("invalid email address"),
  password: z
    .string({ required_error: "password is required" })
    .min(8, "password must be 8 character"),
  passwordConfirm: z
    .string({ required_error: "confirm password is required" })
    .min(1),
});
