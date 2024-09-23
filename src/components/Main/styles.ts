import styled from "styled-components";

export const MainContainer = styled.main`
  background-image: url('assets/background.jpeg');
  background-size: cover;
  background-position: center;
  height: 90vh;
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 100vh;
    border-radius: 0;
  }
`;
