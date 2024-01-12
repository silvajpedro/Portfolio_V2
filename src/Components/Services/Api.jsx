import Rotas from "../Rotas/Routes";
import MeuContexto from "./Context";

import * as Prismic from "@prismicio/client";
import { useFirstPrismicDocument } from "@prismicio/react";

export const client = Prismic.createClient("silvajpedro", {
  accessToken:
    "MC5aWlZoU3hBQUFDQUFqaDll.B--_vUDvv701QnUS77-977-977-977-9Y--_vWod77-9fjda77-9L--_vS7vv71dau-_ve-_vUIn77-9",
});

export default function Api() {
  const [document] = useFirstPrismicDocument();

  console.log(document);

  if (!document) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <MeuContexto.Provider value={document}>
        <Rotas />
      </MeuContexto.Provider>
    </>
  );
}
