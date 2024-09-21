import React from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
};

export function Button({ title, icon, onClick }: ButtonProps, ) {
  return (
    <ButtonContainer onClick={onClick}>
      {icon}
      {title}
    </ButtonContainer>
  );
}