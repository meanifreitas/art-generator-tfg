import React from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  title: string;
  icon: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({ title, icon, type = "button", onClick, disabled }: ButtonProps, ) {
  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {title}
    </ButtonContainer>
  );
}