import axios from "axios";

const api = axios.create({
  baseURL: "https://covid-api.mmediagroup.fr/v1",
});

export default class Access {
  async carregarEstados() {
    const resp = await api.get("/cases?country=Brazil");
    const data = resp.data;
    let estadosNome = Object.keys(data);

    return estadosNome;
  }

  async carregarPessoasVacinadas() {
    const resp = await api.get("/vaccines?country=Brazil");
    const estados = resp.data;
    let estadosReturn = [];
    let estadosNome = Object.keys(estados);
    estadosNome.forEach((nome, index) => {
      let estadoInfo = estados[nome];

      if (nome !== "Unknown" && nome !== "All") {
        let estado = {
          id: index,
          nome,
          vacinados: estadoInfo.administered,
        };

        estadosReturn.push(estado);
      }
    });

    return this.graphOneInfo(estadosReturn);
  }

    graphOneInfo(estados) {
    let nomes = estados.map((estado) => estado.nome);
    let qtdVacinados = estados.map((estado) => estado.vacinados);

    const data = {
      labels: [...nomes],
      datasets: [
        {
          label: "# de Pessoas Vacinadas",
          data: [...qtdVacinados],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 100, 64, 0.2)",
            "rgba(105, 159, 64, 0.2)",
            "rgba(55, 259, 164, 0.2)",
            "rgba(75, 75, 139, 0.2)",
            "rgba(102, 205, 170, 0.2)",
            "rgba(255, 222, 173, 0.2)",
            "rgba(255, 180, 311, 0.2)",
            "rgba(238, 130, 238, 0.2)",
            "rgba(255, 182, 193, 0.2)",
            "rgba(255, 210, 115, 0.2)",
            "rgba(233, 150, 122, 0.2)",
            "rgba(255, 127, 80, 0.2)",
            "rgba(160, 200, 115, 0.2)",
            "rgba(216, 191, 216, 0.2)",
            "rgba(176, 224, 230, 0.2)",
            "rgba(190, 159, 170, 0.2)",
            "rgba(175, 238, 238, 0.2)",
            "rgba(240, 255, 113, 0.2)",
            "rgba(255, 99, 71, 0.2)",
            "rgba(100, 109, 164, 0.2)",
            "rgba(205, 92, 92, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 100, 64, 1)",
            "rgba(105, 159, 64, 1)",
            "rgba(55, 259, 164, 1)",
            "rgba(75, 75, 139, 1)",
            "rgba(102, 205, 170, 1)",
            "rgba(255, 222, 173, 1)",
            "rgba(255, 180, 311, 1)",
            "rgba(238, 130, 238, 1)",
            "rgba(255, 182, 193, 1)",
            "rgba(255, 210, 115, 1)",
            "rgba(233, 150, 122, 1)",
            "rgba(255, 127, 80, 1)",
            "rgba(160, 200, 115, 1)",
            "rgba(216, 191, 216, 1)",
            "rgba(176, 224, 230, 1)",
            "rgba(190, 159, 170, 1)",
            "rgba(175, 238, 238, 1)",
            "rgba(240, 255, 113, 1)",
            "rgba(255, 99, 71, 1)",
            "rgba(100, 109, 164, 1)",
            "rgba(205, 92, 92, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

      return data;
  }
}
