import styled from "styled-components";

export const DividerContainer = styled.hr`
  border-color: ${(props) => props.theme.text};
  margin: 1rem 0;
  border: solid .5px;
`;