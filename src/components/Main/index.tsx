import { Form } from "../Form";
import { Header } from "../Header";
import { MainContainer } from "./styles"; 
export function Main() {
  return (
    <MainContainer>
      <Header />
      <Form />
    </MainContainer>
  );
}