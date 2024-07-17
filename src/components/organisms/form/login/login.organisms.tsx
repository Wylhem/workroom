import { LabelInput } from "@/components/molecules/input";
import { VscSend } from "react-icons/vsc";
import { PrimaryButton } from "@/components/molecules/button";
import { Links } from "@/components/atoms/Link";

interface LabelInputProps {
  id: string;
  type: "text" | "email" | "password";
  placeholder: string;
  state: "default" | "invalid" | "disabled";
  required: boolean;
  label: string;
  message?: string;
}
interface LoginFormProps {
  title: string;
  action?: string | ((formData: FormData) => void) | undefined;
  fields: Array<LabelInputProps>;
  children: React.ReactNode;
}

function LoginForm({ title, action, fields, children }: LoginFormProps) {
  return (
    <div className={"flex flex-col gap-y-10 w-96"}>
      <h1 className={"text-2xl text-center font-bold leading-3"}>{title}</h1>
      <form action={action} className={"flex flex-col gap-y-8"}>
        <div className={"flex flex-col gap-y-5"}>
          {fields.map((field) => (
            <LabelInput
              key={field.id}
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              state={field.state}
              required={field.required}
              message={field.message}
            >
              {field.label}
            </LabelInput>
          ))}
        </div>
        <div className={"flex flex-row justify-between"}>{children}</div>
      </form>
    </div>
  );
}

LoginForm.Button = function LoginFormButton({
  text,
  ...props
}: {
  text: string;
}) {
  return (
    <PrimaryButton
      {...props}
      type={"submit"}
      text={text}
      rightIcon={<VscSend />}
    />
  );
};

LoginForm.Links = function LoginFormLinks({
  href,
  children,
  Icon,
}: {
  href: string;
  children: React.ReactNode;
  Icon?: React.ReactNode;
}) {
  return (
    <Links href={href} icon={Icon}>
      {children}
    </Links>
  );
};
export default LoginForm;
