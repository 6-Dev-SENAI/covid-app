import axios from "axios"

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
}