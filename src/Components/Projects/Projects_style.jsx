import styled from "styled-components";
import Carousel from "nuka-carousel";

export const CarroselBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 3.1vw;
    margin-top: 80px;
    margin-bottom: 10px;
  }
`;
export const Carrosel = styled(Carousel)`
  * {
    font-family: "Inconsolata", monospace;
  }
  img {
    width: 57vw;
    height: 115vh;
  }
  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 79.5vh;
    &:hover {
      div {
        visibility: initial;
      }
    }
  }
`;
export const DescriptionProject = styled.div`
  visibility: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  position: absolute;
  margin-top: 140px;
  margin-right: 12px;
  width: 41vw;
  height: 20.5vh;
  background-color: #000000;
  border-radius: 10px;

  figcaption {
    width: 40vw;
    height: 13vh;
    padding: 10px;
    font-size: 1.77vw;
  }
  nav {
    display: flex;
    padding-top: 2px;
    width: 60%;
    height: 6.8vh;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #02c902;
    color: #000000;
    width: 11vw;
    height:5vh;
    border-radius: 10px;
    border: solid #091a32;
    line-height: 16px;
    font-size: 1.18vw;
    margin-left: 10px;
    font-weight: 600;
    text-decoration: none;
    &:hover {
      opacity: 0.5;
      cursor: url('data:image/x-icon;base64,AAACAAEAICAQAAYAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAAAIAAAAAAAAAAAAAEAAAAAAAAAAAAAAA////APr6+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAERERAAAAAAAAAAAAAAAAAQAAABAAAAAAAAAAAAAAABAAAAABAAAAAAAAAAAAAAEAAAAAARAAAAAAAAAAAAAQAAAAAAAQAAAAAAAAAAABAAAAAAAAAQAAAAAAAAAAAQAAAAAAAAEAAAAAAAAAABAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAQAAEAAAAAAAEAAAAAAAAAEAERAAAAAAABAAAAAAAAAAEQAQAAAAAAAQAAAAAAAAAAAAEAAAAAAAEAAAAAAAAAAAABABACABABAAAAAAAAAAAAAQAQAQAQAQAAAAAAAAAAAAEAEAEAEAEAAAAAAAAAAAABABABABEQAAAAAAAAAAAAAQAQAREAAAAAAAAAAAAAAAEAERAAAAAAAAAAAAAAAAABABAAAAAAAAAAAAAAAAAAAQAQAAAAAAAAAAAAAAAAAAEAEAAAAAAAAAAAAAAAAAABABAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAD///////////////////////////////////////////8D///+Af///AD///gAf//wAH//4AA//+AAP//AAD//gAA//wAAP/8AAD//mAA///gAP//4AD//+AA///gAP//4AH//+AP///gf///4f///+H////h////4f////P///w=='), auto; 
    }
  }
`;
