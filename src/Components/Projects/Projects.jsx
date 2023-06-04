import { AlignBox, ContentBox } from "../../GlobalStyle";
import * as S from "./Projects_style.jsx";
import Carousel from "./Carousel/Carousel.jsx";
import { Projects_Carousel } from "./Carousel/Carousel_Assets";
import Phone from "./Contact/phone.jsx";
export default function Projects() {
  return (
    <AlignBox>
      <ContentBox SizeH="235vh">
        <S.CarroselBox>
        <h2>Projetos</h2>
        <Carousel>
    {/* a caixa figure que vai alinhar cada um no seu quadrado 
    verificar o estilo e tentar diminuir o máximo de linhas possível
    arquivo carousel.jsx e project style.jsx */}
          {Projects_Carousel.map((item)=>(
            <figure>
           <img src={item.projeto} alt="imagem dos projetos do joao"/>
           <figcaption>{item.descricao_projeto}</figcaption>
            </figure> 
          ))}
        </Carousel>

          </S.CarroselBox>
          <Phone/>
      </ContentBox>
    </AlignBox>
  );
}
