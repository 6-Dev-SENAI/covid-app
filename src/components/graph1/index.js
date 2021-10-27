import React, { useEffect, useState } from 'react'
import { Doughnut } from "react-chartjs-2";

import api from "../../services/service.js"
const Access = new api();

export default function GraphO(props) {

    const [data, setData] = useState({
      labels: [],
      datasets: [
        {
          label: "# de Pessoas Vacinadas",
          data: [],
          backgroundColor: [
            "rgba(255, 255, 255, 0.2)"
          ],
          borderColor: [
            "rgba(255, 255, 255, 1)"
          ],
          borderWidth: 1,
        },
      ],
    });

    const carregarPessoasVacinadas = async () => {
      try {
        const resp = await Access.carregarPessoasVacinadas();
        console.log(resp)
        setData(resp);
        return null;
      } catch (err) {
        console.error(err);
      }
    };

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      if (!loaded) {
        carregarPessoasVacinadas();
        setLoaded(true);
      }
    }, [loaded]);
        
    return (
      <div>
        <div>
          <p>Total de Pessoas Vacinadas</p>
          <p>Selecione o Estado: 0</p>
        </div>
        <div>
          <Doughnut
            data={data}
            options={{ plugins: { legend: { display: false } } }}
          />
        </div>
      </div>
    );
}
