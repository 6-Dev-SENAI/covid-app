import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

import { Container } from "./styled.js";

import api from "../../services/service.js";
const Access = new api();

export default function GraphO(props) {
  const { estadoSelecionado } = props;

  const [info, setInfo] = useState({
    data: {
      labels: [],
      datasets: [
        {
          label: "# de Pessoas Vacinadas",
          data: [],
          backgroundColor: ["rgba(255, 255, 255, 0.2)"],
          borderColor: ["rgba(255, 255, 255, 1)"],
          borderWidth: 1,
        },
      ],
    },
    estados: [],
  });

  const carregarPessoasVacinadas = async () => {
    try {
      const resp = await Access.carregarPessoasVacinadas();
      setInfo(resp);
      return null;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    carregarPessoasVacinadas();
  }, [estadoSelecionado]);

  const [vacinacao, setVacinacao] = useState(0);

  useEffect(() => {
    let estado = info.estados.filter((x) => x.nome === estadoSelecionado)[0];

    if (estado === undefined) {
      estado = {
        id: 0,
        nome: "Selecione o Estado",
        vacinados: 0,
      };
    }

    setVacinacao(estado.vacinados);
  }, [estadoSelecionado, info]);

  return (
    <Container className="container-fluid text-white p-2 border-0">
      <div>
        <p>Total de Pessoas Vacinadas</p>
        <p>
          {estadoSelecionado}: {vacinacao}
        </p>
      </div>
      <div>
        <Doughnut
          data={info.data}
          options={{ plugins: { legend: { display: false } } }}
        />
      </div>
    </Container>
  );
}
