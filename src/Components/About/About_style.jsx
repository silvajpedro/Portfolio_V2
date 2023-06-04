import styled from "styled-components";

export const AboutMeBox = styled.div`
  display: flex;
  height: 100vh;
`;
export const MyImageBox = styled.figure`
  display: flex;
  justify-content: center;
  width: 41vw;
  img {
    height: 78vh;
    width: 39vw;
    border-radius: 10px;
    padding-left: 2vw;
    object-fit: scale-down;
  }
`;
export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 80vh;
  text-align: center;
`;
export const AboutMeTitle = styled.h2`
  font-size: 3vw;
  margin-bottom: 2vh;
`;
export const AboutMeText = styled.p`
  height: 53vh;
  width: 90%;
  font-size: 2vw;
  font-family: "Inconsolata", monospace;
  line-height: 5vh;
`;
export const HabilitiesBox = styled.div`
  height: 95vh;
`;
export const HabilitiesTitle = styled.h2`
  font-size: 3vw;
  text-align: center;
  margin-top: 5vh;
`;
export const TecnologiesBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;
export const TecnologiesImages = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 42.5%;
  height: 50vh;
`;
export const TecnologiesDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 55%;
  height: 48vh;
  margin-right:1.5vw;
  h2,
  p {
    font-family: "Inconsolata", monospace;
  }
  h2 {
    position: relative;
    top: -3vh;
    font-size: 3.2vw;
  }
  p {
    font-size: 2.30vw;
    line-height: 38px;
    text-align: justify;
    padding:10px;
  }
`;
export const HabilitiesImage = styled.img`
  width: 8vw;
  height: 14vh;
`;
export const FigureHabilities = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18.5vh;
  width: 9.5vw;
  border-radius: 10px 20px 0px;
  background-color: #c4c4c4;
  transition: ease 0.3s;
  background-image: url(${(props) => props.BackImage});
  background-position: center;
  background-size: 68%;
  filter: grayscale(100%);
  background-repeat: no-repeat;
  &:hover {
    transform: scale(105%);
    object-fit: cover;
    background-color: #000;
    border: solid 2px #00b100;
    filter: none;
    ${HabilitiesImage} {
      visibility: hidden;
    }
  }
`;
