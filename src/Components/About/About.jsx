import { AlignBox, ContentBox } from "../../GlobalStyle";
import * as S from "./About_style.jsx";
import Coding from "../../assets/coding.png";
import { HabilitiesInfo } from "./Habilities_assets";
import { useState } from "react";

export default function About() {
  const [guardaId,setGuardaId] = useState({
    id:0,
    modal:true
  });
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
              
              <h2>{guardaId.modal === true ? "" :HabilitiesInfo[guardaId.id].title}</h2>
              <p>{ guardaId.modal === true ? "Passe o mouse no card para ler" : HabilitiesInfo[guardaId.id].description}</p>
            
            </S.TecnologiesDescription>
            <S.TecnologiesImages>
              
              {HabilitiesInfo.map((item) => (
                <S.FigureHabilities
                // aqui o id que vem do map está sendo guardado na const guardaId para mostrar
                // a informação condizente com as tecnologias
                 onMouseOut={()=>{setGuardaId({modal:true})}}
                 onMouseOver={()=>{setGuardaId({id:item.id, modal:false})}} 
                 key={item.id} 
                 BackImage={item.lightImage}>
                  <S.HabilitiesImage key={item.id} src={item.darkImage} alt="" />
                </S.FigureHabilities>
              ))}
            </S.TecnologiesImages>
          
          </S.TecnologiesBox>
        </S.HabilitiesBox>

      </ContentBox>
    </AlignBox>
  );
}
