"use client";

import { LoginForm } from "@/components/organisms/form";
import { FaAngleRight } from "react-icons/fa6";
import { login } from "@/actions/auth/";
import { useFormState } from "react-dom";

const initialState = {
  errors: {
    email: undefined,
    password: undefined,
  },
};
export default function Login() {
  const [state, formAction] = useFormState(login, initialState);
  return (
    <main>
      <div className={"w-72"}>
        <LoginForm
          action={formAction}
          title={"Sign In to Workroom "}
          fields={[
            {
              id: "email",
              type: "email",
              placeholder: "youremail@gmail.com",
              state: state?.errors?.email ? "invalid" : "default",
              required: true,
              label: "Email Address",
              message: state?.errors?.email?.at(0),
            },
            {
              id: "password",
              type: "password",
              placeholder: "••••••••",
              state: state?.errors?.password ? "invalid" : "default",
              required: true,
              label: "Password",
              message: state?.errors?.password?.at(0),
            },
          ]}
        >
          <LoginForm.Button text={"login"} />
          <LoginForm.Links href={"/register"} Icon={<FaAngleRight />}>
            Register
          </LoginForm.Links>
        </LoginForm>
      </div>
    </main>
  );
}
