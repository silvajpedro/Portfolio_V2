import { useState, useEffect, useMemo, memo } from "react";
import * as S from "./Typing_style.jsx";
import RobotHand from "../../../assets/robotblack.svg";
import Laptop from '../../../assets/testenote.gif'
function Typing({ FirstSentence, SecondSentence }) {
// frases separadas e tornadas em um array
  const FirstArraySentence = FirstSentence.split("");
  const SecondArraySentence = SecondSentence.split("");
// contadores do índice do array
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  const [MainTextAdd, setMainTextAdd] = useState("");
  const [SecondTextAdd, setSecondTextAdd] = useState("");
  // modal de abrir a mão e laptop
  const [openModalHand, setOpenHand] = useState(false);
  const [openModalLaptop,setOpenLaptop] = useState(false)
  
  useEffect(() => {
    if (count < FirstArraySentence.length) {
       // primeira frase
      setTimeout(() => {
        setMainTextAdd(MainTextAdd.concat(FirstArraySentence[count]));
        setCount(count + 1);
      }, 240);
      //abre o modal da mão
      setTimeout(() => {
        setOpenHand(true);
      }, 4500);
    } else if (secondCount < SecondArraySentence.length) {
      // segunda frase
      setTimeout(() => {
        setSecondTextAdd(
          SecondTextAdd.concat(SecondArraySentence[secondCount])
        );
        setSecondCount(secondCount + 1);
      }, 200);
    }
    // modal do laptop
    setTimeout(()=>{
      setOpenLaptop(true)
    },1000)
  });
  return (
    <S.TypingBox>
    <S.HelloBox>
      <S.NameBox>
        <h1>{MainTextAdd}</h1>
        {openModalHand && <S.HelloHand src={RobotHand} alt="mão robotica de cor verde acenando" />}
      </S.NameBox>
      <S.DevelopBox>
        <h2>{SecondTextAdd}</h2>
      </S.DevelopBox>
    </S.HelloBox>
    <S.LaptopBox>
      <S.LaptopImage src={Laptop} alt="" LaptopOpen={openModalLaptop} />
    </S.LaptopBox>
    </S.TypingBox>
  );
}
export default memo(Typing);
