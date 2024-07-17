import { Input } from "@/components/atoms/input";
import { ReactNode } from "react";

interface LabelInputProps {
  id: string;
  children: ReactNode;
  type: "text" | "password" | "email" | "number";
  placeholder?: string;
  state?: "default" | "invalid" | "disabled";
  required?: boolean;
  message?: string;
}

function LabelInput(props: LabelInputProps) {
  return (
    <div>
      <label
        htmlFor={props.id}
        className={`${
          props.state === "invalid" ? "text-red" : "text-gray-dark"
        } ${props.required ? "after:content-['*'] after:text-red" : ""}  m-2 `}
      >
        {props.children}
      </label>
      <Input {...props} />
      {props.state === "invalid" && (
        <p className={"text-red m-2"}>{props.message}</p>
      )}
    </div>
  );
}

export default LabelInput;
