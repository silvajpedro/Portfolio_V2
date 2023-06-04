import styled from "styled-components";
import { DinamicText } from "../../../GlobalStyle.jsx";

export const TypingBox = styled.section`
display: flex;
`

export const HelloBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 41vh;
  width: 57.5vw;
  padding-left: 18px;
  color: ${DinamicText};
`;
export const NameBox = styled.div`
  display: flex;
  align-items: flex-end;
  height: 30vh;
  width: 57vw;
  h1 {
    font-size: 3vw;
    word-spacing: -22px;
  }
`;
export const HelloHand = styled.img`
  position: relative;
  top: 7vh;
  height: 20vh;
  width: 10vw;
  object-fit: scale-down;
  animation: shake 2s infinite ease-in-out alternate-reverse both;
  @keyframes shake {
    25% {
      transform: rotate(-15deg);
    }
    50% {
      transform: rotate(14deg);
    }
    75% {
      transform: rotate(-13deg);
    }
  }
`;
export const DevelopBox = styled.div`
  padding-top: 20px;
  h2 {
    font-size: 2vw;
    word-spacing: -10px;
  }
`;
export const LaptopBox = styled.figure`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 31vw;
  height: 65vh;
`
export const LaptopImage = styled.img`
  width: 29vw;
  height: 60vh;
  opacity:${(props) => (props.LaptopOpen || "0")};
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  animation: other 3.5s infinite ease-in normal forwards;
  transition: ease-in-out 0.8s;
  @media (max-width: 900px) {
    align-items: center;
    justify-content: center;
    width: 100%;
    height:32vh;
    object-fit: scale-down;
  }
  @keyframes other {
    0% {
      transform: translate(-1px, -1px);
    }
    25% {
      transform: translate(3.5px, 6.5px);
    }
  }
`