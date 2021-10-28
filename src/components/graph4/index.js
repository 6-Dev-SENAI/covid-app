import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import { Container } from "./styled";

import AccessAPI from "../../services/index.js";
const API = new AccessAPI();

export default function GraphF(props) {
  const [screenInfo, setScreenInfo] = useState({
    months: [
      {
        id: 0,
        name: "",
        display: "Carregando...",
        quantity: 0,
      },
    ],
    data: {
      labels: ["Carregando..."],
      datasets: [
        {
          label: "Quantidade de Pessoas Mortas",
          data: [0],
          fill: false,
          backgroundColor: "rgb(255, 99, 132, 0.8)",
          borderColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    },
  });

  const loadContent = async () => {
    const resp = await API.graphFour();
    setScreenInfo(resp);
    return resp;
  };

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      loadContent();
      setLoaded(true);
    }
  }, [loaded]);

  return (
    <Container className="container-fluid text-white p-2 border-0">
      <div>
        <p>Pessoas mortas/mês nos últimos 12 meses</p>
      </div>
      <div>
        <Line data={screenInfo.data} />
      </div>
    </Container>
  );
}
