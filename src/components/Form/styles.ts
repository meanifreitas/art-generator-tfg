import styled from "styled-components";

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 0 2rem;
`;

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const TextArea = styled.textarea`
  background-color: ${(props) => props.theme.background};
  opacity: .8;
  width: 100%;
  border: none;
  border-radius: 6px;
  min-height: 9rem;
  color: ${(props) => props.theme.text};
  padding: 1rem;
  resize: none;

  &::placeholder {
    color: ${(props) => props.theme.text}; 
  }
`;