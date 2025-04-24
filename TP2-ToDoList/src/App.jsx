import React from "react";
import Encabezado from "./componentes/Encabezado";
import Formulario from "./componentes/Formulario";
import FiltroTareas from "./componentes/FiltroTareas";
import ListaTareas from "./componentes/ListaTareas";
import TareaMasRapida from "./componentes/TareaMasRapida";
import BotonEliminarCompletadas from "./componentes/BotonEliminarCompletadas";

function App() {
  return (
    <div className="container mt-5">
      <Encabezado />
      <Formulario />
      <FiltroTareas />
      <ListaTareas />
      <TareaMasRapida />
      <BotonEliminarCompletadas />
    </div>
  );
}

export default App;