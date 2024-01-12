import { AlignBox, ContentBox } from "../../GlobalStyle";
import * as S from "./Projects_style.jsx";
import Carousel from "./Carousel/Carousel.jsx";
import Phone from "./Contact/phone.jsx";
import { useContext } from "react";
import MeuContexto from "../Services/Context";

export default function Projects() {

  const infoApi = useContext(MeuContexto)

  console.log(infoApi)

  return (
    <AlignBox>
      <ContentBox SizeH="235vh">
        
        <S.CarroselBox>
          <h2>Projetos</h2>

          <Carousel>

            {/* a caixa figure que vai alinhar cada um no seu quadrado 
    verificar o estilo e tentar diminuir o máximo de linhas possível
    arquivo carousel.jsx e project style.jsx */}

            {infoApi.data.body[0].items.map((item, id) => (
              <figure key={id}>

                  <img src={item.imagem_projeto.url} alt="imagem dos projetos do joao" />
                
                <S.DescriptionProject>
                
                  <figcaption>{item.descricao_projeto[0].text}</figcaption>
                
                  <nav>
                    <a href={item.link.url} target="_blank">Acessar projeto</a>
                    <a href={item.link_codigo.url} target="_blank" >Acessar código</a>
                  </nav>

                </S.DescriptionProject>
              </figure>
            
            ))}
          </Carousel>
        </S.CarroselBox>

        <Phone />
        
      </ContentBox>
    </AlignBox>
  );
}
