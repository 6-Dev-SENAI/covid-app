import { getComboStates } from "./header";
import { loadStates } from "./graph1";
import { loadVac } from "./graph2";
import { loadPeople } from "./graph3";

import axios from "axios";
const api = axios.create({
  baseURL: "https://covid-api.mmediagroup.fr/v1",
});

export default class AccessAPI {
  async comboStates() {
    try {
      const resp = await getComboStates(api.get);
      return resp;
    } catch (err) {
      console.log(err);
    }
  }

  async graphOne(selectedState) {
    try {
      const resp = await loadStates(api.get, selectedState);
      return resp;
    } catch (err) {
      console.error(err);
    }
  }

  async graphTwo(selectedState) {
    try {
      const resp = await loadVac(api.get, selectedState);
      return resp;
    } catch (err) {
      console.error(err);
    }
  }

  async graphThree(selectedState) {
    try {
      const resp = await loadPeople(api.get, selectedState)
      return resp;
    } catch (err) {
      console.error(err);
    }
  }

  async graphFour() {
    try {
    } catch (err) {
      console.error(err);
    }
  }
}
