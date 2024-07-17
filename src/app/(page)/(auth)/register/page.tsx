"use client";
import { LoginForm } from "@/components/organisms/form";
import { FaAngleRight } from "react-icons/fa6";
import { register } from "@/actions/auth";
import { useFormState } from "react-dom";
const initialState = {
  errors: {
    username: undefined,
    email: undefined,
    password: undefined,
    confirm_password: undefined,
  },
};
function Register() {
  const [state, formAction] = useFormState(register, initialState);
  return (
    <div>
      <main>
        <div className={"w-72"}>
          <LoginForm
            action={formAction}
            title={"Sign In to Woorkroom "}
            fields={[
              {
                id: "username",
                type: "text",
                placeholder: "yourusername",
                state: state?.errors?.username ? "invalid" : "default",
                required: true,
                label: "Username",
                message: state?.errors?.username?.at(0),
              },
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
              {
                id: "confirm_password",
                type: "password",
                placeholder: "••••••••",
                state: state?.errors?.confirm_password ? "invalid" : "default",
                required: true,
                label: "Confirm Password",
                message: state?.errors?.confirm_password?.at(0),
              },
            ]}
          >
            <LoginForm.Button text={"register"} />
            <LoginForm.Links href={"/login"} Icon={<FaAngleRight />}>
              Already have an account?
            </LoginForm.Links>
          </LoginForm>
        </div>
      </main>
    </div>
  );
}

export default Register;
