import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: ${(props) => props.theme.button};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* Espaço entre o ícone e o texto */
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme.hover};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;