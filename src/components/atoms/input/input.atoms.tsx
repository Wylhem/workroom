"use client";
import { HTMLInputTypeAttribute, useMemo, useState } from "react";
import { PiEyeClosedThin } from "react-icons/pi";
import { PiEyeThin } from "react-icons/pi";

interface InputProps {
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  state?: "default" | "invalid" | "disabled";
  required?: boolean;
}

function Input({
  id,
  type,
  placeholder,
  state = "default",
  required,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const PasswordAdornment = useMemo(() => {
    if (type === "password") {
      return (
        <div
          aria-label={"password-adornment"}
          className={`${
            state === "disabled" ? "cursor-not-allowed" : "cursor-pointer"
          } bg-transparent`}
          onClick={
            state === "disabled"
              ? () => {}
              : () => setShowPassword(!showPassword)
          }
        >
          {showPassword ? (
            <PiEyeThin
              className={`${
                state === "invalid" ? "text-red-500" : "text-gray-dark"
              } `}
              size={24}
            />
          ) : (
            <PiEyeClosedThin
              className={`${
                state === "invalid" ? "text-red-500" : "text-gray-dark"
              } `}
              size={24}
            />
          )}
        </div>
      );
    }
  }, [type, state, showPassword]);

  return (
    <div
      aria-label={"input"}
      aria-invalid={state === "invalid"}
      aria-disabled={state === "disabled"}
      className={`flex flex-row items-center
        border px-4 py-2 rounded-2xl
        ${
          state === "default"
            ? "border-gray ring-2 ring-transparent shadow__gray focus-within:ring-2 focus-within:ring-primary-light focus-within:border-primary"
            : ""
        }
        ${
          state === "invalid"
            ? "border-red ring-2 ring-red-300 text-red placeholder:placeholder-red"
            : ""
        }
        ${
          state === "disabled"
            ? "border-gray-disabled ring-2 ring-transparent  text-gray-disabled disabled:cursor-not-allowed"
            : ""
        }`}
    >
      <input
        id={id}
        name={id}
        required={required}
        disabled={state === "disabled"}
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        className={
          "focus:outline-none w-full bg-none disabled:bg-transparent disabled:cursor-not-allowed"
        }
      />
      {PasswordAdornment}
    </div>
  );
}

export default Input;
