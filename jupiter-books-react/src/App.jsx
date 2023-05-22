import "../src/Styles/main.scss";
import { Outlet as Conteudo } from "react-router-dom";
import Nav from "./componentes/Nav";
import Rodape from "./componentes/Rodape";


function App() {

  return (
    <>
      <Nav/>
      <Conteudo />
      <Rodape />
    </>
  );
}

export default App
