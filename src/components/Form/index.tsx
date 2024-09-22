import { Brush, Download, Image } from "lucide-react";
import { Button } from "../Button";
import { DownloadButton, FormContainer, FormElement, ImageContainer, NoImage, ResultContainer, TextArea } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import { defaultTheme } from "../../styles/theme";
import { Spinner } from "../Spinner";

type Inputs = {
  prompt: string;
};

export function Form() {
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const savedImage = localStorage.getItem("generatedImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  const convertBlobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("prompt", data.prompt);
      formData.append("style_id", "29");
      formData.append("aspect_ratio", "4:3");

      const response = await fetch('https://api.vyro.ai/v1/imagine/api/generations', {
        method: "POST",
        headers: {
          "Authorization": "Bearer vk-vy2icOmy8qdw2Ub4232bJMD3kbFJYBK7QYr3axRLLWEIF2Q4"
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error("Erro ao gerar a imagem");
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      const base64Image = await convertBlobToBase64(blob);
      localStorage.setItem("generatedImage", base64Image);
      setImage(imageUrl);
      setLoading(false);
    } catch (e) {
      console.log("Error generating image:", e);
      setImage(null);
    }
  }

  const prompt = watch("prompt");

  const handleDownload = () => {
    if (!image) return;
    const link = document.createElement("a");
    link.href = image;
    link.download = "generated_image.png";
    link.click();
  }

  return (
    <FormContainer>
      <FormElement onSubmit={handleSubmit(onSubmit)}>
        <TextArea
          placeholder="Type your prompt..."
          {...register("prompt", { required: true })}
        />
        <Button
          title="generate"
          icon={<Brush size={16} color={'#fff'} strokeWidth={2} />}
          type="submit"
          disabled={!prompt}
        />
      </FormElement>
      { loading ? (
        <ResultContainer>
          <Spinner />
        </ResultContainer>
      ) : (
        image ? (
          <ResultContainer>
          <ImageContainer src={image} alt="Generated" />
          <DownloadButton onClick={handleDownload}>
            <Download size={20} color={defaultTheme.text}/>
          </DownloadButton>
        </ResultContainer>
        ) : (
          <NoImage>
          <Image size={30} color={defaultTheme.text}/>
          <p>Nothing to show,<br/>generate your art</p>
        </NoImage>
        )
      )}
    </FormContainer>
  );
}