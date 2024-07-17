"use server";
import {
  loginValidation,
  registerValidation,
} from "@/actions/auth/auth.validation";

export async function login(prevState: any, formData: FormData) {
  console.log("formData", formData);
  const validationField = loginValidation.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationField.success) {
    console.log(
      "validationField.error",
      validationField.error.flatten().fieldErrors
    );
    return {
      errors: validationField.error.flatten().fieldErrors,
    };
  }
}

export const register = async (prevState: any, formData: FormData) => {
  console.log("formData", formData);
  const validationField = registerValidation.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  });

  if (!validationField.success) {
    console.log(
      "validationField.error",
      validationField.error.flatten().fieldErrors
    );
    return {
      errors: validationField.error.flatten().fieldErrors,
    };
  }
};
