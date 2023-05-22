import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/bootstrap-personalizado.scss'
<assets />
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./paginas/Home.jsx";
import Sobre from "./paginas/Sobre.jsx";
import Produto from "./paginas/Produto.jsx";
import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro';

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sobre",
        element: <Sobre />
      },
      {
        path: "/cadastro",
        element: <Cadastro />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/produtos/:idProduto",
        element: <Produto />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>,
);
