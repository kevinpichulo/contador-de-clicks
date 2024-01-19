import "./App.css";
import Boton from "./componentes/boton";
import Contador from "./componentes/contador";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import { useState } from "react";

function App() {

const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
   setNumClicks (numClicks + 1)
  };

  const reiniciarConatador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="logo de freecodecamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks}/>
        <Boton
          texto="click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto="reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarConatador}
        />
      </div>
    </div>
  );
}

export default App;
