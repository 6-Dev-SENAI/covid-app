import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="container-fluid p-0 m-0 vh-100">
      <Link
        to="/"
        className="d-flex flex-column align-items-center justify-content-center h-100 w-100 align-items-center justify-content-center text-danger text-decoration-none "
      >
        <h1>Erro 404!</h1>
        <h2>Não achamos a página que você procura.</h2>
        <br />
        <h3>Voltar a Home</h3>
      </Link>
    </div>
  );
}
