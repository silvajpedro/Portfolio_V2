import { useState, useEffect } from "react";
import * as S from "./phone_style.jsx";

export default function Phone() {
  const [modalCellPhone, setModalCellPhone] = useState(false);
  const [hour, setHour] = useState(new Date().toLocaleTimeString())
  const today = new Date().toLocaleDateString();
  useEffect(()=>{
    setTimeout(()=>{
        setHour(new Date().toLocaleTimeString())
    },1000)
  },hour)
  return (
    <S.PhoneBox>
        <S.PhoneTitle>Contate-me</S.PhoneTitle>
     
      <S.LinkCellPhone link={modalCellPhone} backgroundColor="grab">
    { !modalCellPhone &&  <h2>{hour}</h2> }
     { !modalCellPhone &&  <h4>{today}</h4> }
        <S.PhoneImage
          cellImage={modalCellPhone}
          alt="tela de celular bloqueada" />
      </S.LinkCellPhone>

      <S.ButtonCellPhone
        onClick={() => {
          setModalCellPhone(!modalCellPhone);
        }}
      ></S.ButtonCellPhone>
    </S.PhoneBox>
  );
}
