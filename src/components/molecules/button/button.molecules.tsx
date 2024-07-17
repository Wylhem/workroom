import {Button} from "@/components/atoms/button";
import {ReactNode} from "react";

interface PrimaryButtonProps {
  type: "submit" | "button" | "reset";
  disabled?: boolean;
  text?: string;
  onClick?: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;

}

function PrimaryButton(props: PrimaryButtonProps){
  const  {leftIcon: LeftIcon, rightIcon: RightIcon} = props;
  return (
      <Button
          type={props.type}
          state={props.disabled ? "disabled" : "default"}
          onClick={props.onClick}

      >
        <Button.Body>
          {LeftIcon && (
              <Button.Icon>
                {LeftIcon}
              </Button.Icon>
          )}
          {props.text}
          {RightIcon && (
              <Button.Icon>
                {RightIcon}
              </Button.Icon>
          )}

        </Button.Body>
      </Button>
  )
}

export default PrimaryButton;