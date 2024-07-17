interface ButtonProps {
  children: React.ReactNode;
  state?: "default" | "disabled";
  type?: "submit" | "button" | "reset";
  onClick?: () => void;

}
function Button ({children, state = "default", type = "button", onClick}: ButtonProps) {
  return (
      <button
          type={type}
          onClick={onClick}
          disabled={state === "disabled"}
          className={`
          flex flex-row items-center justify-center gap-x-2
          px-4 py-2 rounded-2xl
          duration-150 
          ${state === "default" ? "bg-primary text-white hover:bg-primary-hover active:bg-primary-dark shadow__primary" : ""}
          ${state === "disabled" ? "bg-gray-disabled text-white disabled:cursor-not-allowed" : ""}
          `}
      >
        {children}
      </button>
  )
}


Button.Body = function ButtonBody ({children}: {children: React.ReactNode}) {
  return (
      <div className={"flex flex-row gap-x-2 items-center"}>
        {children}
      </div>
  )
}

Button.Icon = function ButtonIcon ({children}: {children: React.ReactNode}) {
  return (
      <div className={"flex flex-row gap-x-2"}>
        {children}
      </div>
  )
}

export default Button;