import { AlignBox, ContentBox } from "../../GlobalStyle";
import * as S from "./About_style.jsx";
import Coding from "../../assets/coding.png";
import { useContext, useState } from "react";
import MeuContexto from "../Services/Context";

export default function About() {
  
  const [guardaId,setGuardaId] = useState({
    id:7,
    modal:false
  });

  const infoApi = useContext(MeuContexto)


  return (
    <AlignBox>
      <ContentBox SizeH="195vh">

        <S.AboutMeBox>
          <S.MyImageBox>
            <img src={Coding} alt="ilustração do joão" />
          </S.MyImageBox>
          <S.DescriptionBox>
            <S.AboutMeTitle>Sobre mim</S.AboutMeTitle>
            <S.AboutMeText>
              Meu nome é João Pedro, tenho 21 anos sou um apaixonado por
              tecnologia e um entusiasta por resolução de problemas e desafios
              que me levaram a trilhar o caminho da programação. Em março de
              2022 comecei meus estudos na programação, onde aprendi os
              principais conceitos de front-end e coloquei em prática nos meus
              projetos, pouco a pouco com muita curiosidade e um toque de
              criatividade me tornei mais fascinado pela área por seus desafios
              e suas possibilidades.
            </S.AboutMeText>
          </S.DescriptionBox>
        </S.AboutMeBox>

        <S.HabilitiesBox>
          <S.HabilitiesTitle>Habilidades</S.HabilitiesTitle>
          <S.TecnologiesBox>
            <S.TecnologiesDescription>
              
              <h2>{guardaId.modal === true ? "" : infoApi.data.body1[0].items[guardaId.id].titulo_habilidades[0].text}</h2>
              <p>{ guardaId.modal === true ? "Passe o mouse no card para ler" : infoApi.data.body1[0].items[guardaId.id].texto_habilidade[0].text}</p>
            
            </S.TecnologiesDescription>
            <S.TecnologiesImages>
              
              {infoApi.data.body1[0].items.map((item) => (
                <S.FigureHabilities
                // aqui o id que vem do map está sendo guardado na const guardaId para mostrar
                // a informação condizente com as tecnologias
                 onMouseOut={()=>{setGuardaId({modal:true})}}
                 onMouseOver={()=>{setGuardaId({id:item.id, modal:false})}} 
                 key={item.id} 
                 BackImage={item.lightimage.url}
                //  BackSize={guardaId.id === item.id ? "68%" : "1%"}
                 >
                  <S.HabilitiesImage key={item.id} src={ item.darkimage.url} alt={item.habilidade.alt} />
                </S.FigureHabilities>
              ))}
            </S.TecnologiesImages>
          
          </S.TecnologiesBox>
        </S.HabilitiesBox>

      </ContentBox>
    </AlignBox>
  );
}
