import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home.jsx";
import About from "../About/About.jsx";
import Projects from "../Projects/Projects.jsx";
import Logo from "../../assets/logo3.png";
import * as S from "./Routes_style.jsx";
import { useState } from "react";

export default function Rotas() {
  const [link, setLinks] = useState({
    Home: false,
    About: false,
    Projects: false,
  });
  return (
    <>
      <BrowserRouter>
        <S.Header>
          <nav>
            <S.UL>
              <img src={Logo} alt="imagem logo da página <jp/>" />
              <li>
                <S.Links
                  onClick={() => {
                    setLinks({ Home: true, About: false, Projects: false });
                  }}
                  isOn={link.Home}
                  to="/"
                >
                  Inicio
                </S.Links>
              </li>
              <li>
                <S.Links
                  onClick={() => {
                    setLinks({ Home: false, About: true, Projects: false });
                  }}
                  isOn={link.About}
                  to="/about"
                >
                  Sobre
                </S.Links>
              </li>
              <li>
                <S.Links
                  onClick={() => {
                    setLinks({ Home: false, About: false, Projects: true });
                  }}
                  isOn={link.Projects}
                  to="/projects"
                >
                  Projetos
                </S.Links>
              </li>
            </S.UL>
          </nav>
        </S.Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
