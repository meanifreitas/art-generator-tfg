import { Brush } from "lucide-react";
import { Button } from "../Button";
import { FormContainer, FormElement, TextArea } from "./styles";

export function Form() {
  return (
    <FormContainer>
      <FormElement>
        <TextArea
          placeholder="Type your prompt..."
         />
        <Button
          title="generate"
          icon={<Brush size={16} color={'#fff'} strokeWidth={2}/>}
          onClick={() => console.log('click')}
        />
      </FormElement>
      <div>test</div>
    </FormContainer>
  );
}