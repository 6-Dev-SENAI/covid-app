import React from "react";

import Header from "../../components/header";
import Graph1 from "../../components/graph1";
import Graph2 from "../../components/graph2";
import Graph3 from "../../components/graph3";
import Graph4 from "../../components/graph4";

export default function Main() {
  return (
    <div>
      <Header />
      <div className="container-fluid p-3 d-flex flex-column">
        <div className="container-fluid d-flex">
          <Graph1 estados={["Acre"]} />
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
