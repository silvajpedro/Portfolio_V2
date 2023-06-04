import { AlignBox, ContentBox } from "../../GlobalStyle";
import Typing from "./Typing/Typing.jsx";
export default function Home() {
  return (
    <AlignBox>
      <ContentBox SizeH="77vh">
      <Typing FirstSentence="Oi, eu sou o João" SecondSentence="Desenvolvedor front-end."/>
      </ContentBox>
    </AlignBox>
  );
}
