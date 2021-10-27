import React, { useEffect, useState } from "react";

import Header from "../../components/header";
import Graph1 from "../../components/graph1";
import Graph2 from "../../components/graph2";
import Graph3 from "../../components/graph3";
import Graph4 from "../../components/graph4";

import api from "../../services/service.js";
const Access = new api();

export default function Main() {
  const [estados, setEstados] = useState([]);

  const carregarEstados = async () => {
    try {
      const resp = await Access.carregarEstados();
      setEstados([...resp]);
      return null;
    } catch (err) {
      console.error(err);
    }
  };

  const [estadoSelecionado, setEstadoSelecionado] =
    useState("Selecione o Estado");

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      carregarEstados();
      setLoaded(true);
    }
  }, [loaded]);

  return (
    <div>
      <Header estados={estados} setarEstado={setEstadoSelecionado} />
      <div className="container-fluid p-3 d-flex flex-column">
        <div className="container-fluid d-flex">
          <Graph1 estadoSelecionado={estadoSelecionado} />
          <Graph2 />
          <Graph3 />
        </div>
        <div className="container-fluid d-flex">
          <Graph4 />
        </div>
      </div>
    </div>
  );
}
