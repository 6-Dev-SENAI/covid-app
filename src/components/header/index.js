import React, { useEffect, useState } from "react";

import { Head, SelectArea } from "./styled";
// import EstadoContext from "../../context/estadoContext";

import api from "../../services/service.js";
const Access = new api();

export default function Header() {
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

  const [estadoSelecionado, setEstadoSelecionado] = useState("");

  useEffect(() => {
    carregarEstados();
  });

  return (
    <Head className="container-fluid p-3 d-flex justify-content-between align-items-center text-white">
      <div>
        <h1 className="text-decoration-underline">COVID-19 no Brasil</h1>
      </div>
      <SelectArea className="d-flex h-100 justify-content-between align-items-center">
        <div className="form-group text-area">
          <p className="m-0 p-0">Selecione o Estado:</p>
        </div>
        <div className="form-group select-area">
          <select
            className="form-control w-100"
            onChange={(e) =>
              setEstadoSelecionado(
                e.target.options[e.target.selectedIndex].value
              )
            }
          >
            {estados.map((estado, index) => (
              <option key={index} value={estado}>
                {estado === "All"
                  ? "Todos"
                  : estado === "Sao Paulo"
                  ? "São Paulo"
                  : estado}
              </option>
            ))}
          </select>
        </div>
      </SelectArea>
    </Head>
  );
}
