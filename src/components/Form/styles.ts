import styled from "styled-components";

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 0 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 1rem;
  }
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

export const ResultContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: contain;
  border-radius: inherit;
`;

export const NoImage = styled.div`
  height: 25rem;
  justify-self: stretch;
  border-radius: 6px;
  background-color: ${(props) => props.theme.background};
  opacity: .8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 18rem;
  }
`;

export const DownloadButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.hover}
  }
`;

export const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme.text}
`;