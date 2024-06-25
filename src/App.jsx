import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Inicio from "./components/Main/Inicio.jsx";
import Categorias from "./components/Main/Categorias.jsx";
import Contacto from "./components/Main/Contacto.jsx";
import Torneos from "./components/Main/Torneos.jsx";
import "./App.css";
import "./components/Footer/Footer.css";
import "./components/Header/Header.css";
import "./components/Main/Main.css"

<link
  href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
  rel="stylesheet"
/>;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="main">
      <Header />
      <Main contenido={<Inicio />} />
      <Main contenido={<Categorias />} />
      <Main contenido={<Torneos />} />
      <Main contenido={<Contacto />} />
      <Footer />
    </div>
  );
}

export default App;
