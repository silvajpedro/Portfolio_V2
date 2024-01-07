import { AlignBox, ContentBox } from "../../GlobalStyle";
import * as S from "./Projects_style.jsx";
import Carousel from "./Carousel/Carousel.jsx";
import { Projects_Carousel } from "./Carousel/Carousel_Assets";
import Phone from "./Contact/phone.jsx";

// prismic config
import * as Prismic from "@prismicio/client";
import { useFirstPrismicDocument } from "@prismicio/react";

export const client = Prismic.createClient("silvajpedro", {
  accessToken:
    "MC5aWlZoU3hBQUFDQUFqaDll.B--_vUDvv701QnUS77-977-977-977-9Y--_vWod77-9fjda77-9L--_vS7vv71dau-_ve-_vUIn77-9",
});

export default function Projects() {
  const [document] = useFirstPrismicDocument();

  console.log(document);

  if (!document) {
    return <div>Carregando...</div>;
  }

  return (
    <AlignBox>
      <ContentBox SizeH="235vh">
        
        <S.CarroselBox>
          <h2>Projetos</h2>

          <Carousel>
            
            {/* a caixa figure que vai alinhar cada um no seu quadrado 
    verificar o estilo e tentar diminuir o máximo de linhas possível
    arquivo carousel.jsx e project style.jsx */}

            {document.data.body[0].items.map((item, id) => (
              <figure key={id}>
                <a href={item.link.url} target="_blank">
                  <img src={item.imagem_projeto.url} alt="imagem dos projetos do joao" />
                </a>
                <figcaption>{item.descricao_projeto[0].text}</figcaption>
              </figure>
            ))}
          </Carousel>
        </S.CarroselBox>

        <Phone />
        
      </ContentBox>
    </AlignBox>
  );
}
