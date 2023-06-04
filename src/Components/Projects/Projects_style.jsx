import styled from "styled-components";
import Carousel from "nuka-carousel";

export const CarroselBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
h2{
  font-size: 3.1vw;
  margin-top: 80px;
  margin-bottom: 10px;
}
`
export const Carrosel = styled(Carousel)`
 img{
  width: 57vw;
  height: 115vh;
 }
  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 79.5vh;
    &:hover {
      figcaption {
        visibility: initial;
      }
    }
  }
  figcaption {
    visibility: hidden;
    position: absolute;
    margin-top: 140px;
    margin-right:12px;
    width: 41vw;
    height: 20.5vh;
    font-size: 1.95vw;
    border-radius: 10px;
    padding: 6px;
    background-color: black;
    font-family: "Inconsolata", monospace;
  }
`;