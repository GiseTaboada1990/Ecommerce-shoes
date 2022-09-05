import React from "react";

import "./HighSchoolBranches.css";

const HighSchoolBranches = (props) => {
  const options = [
    { text: "Envios",handler: props.actionProvider.handleEnvios, id: 1},
    { text: "Tardanza del producto", handler:props.actionProvider.handlePedido, id: 2 },
    { text: "Producto incorrecto", handler: props.actionProvider.handleIncorrecto, id: 3 },
    { text: "Gestionar carrito", handler: props.actionProvider.handleCarrito, id: 4 },
    { text: "Cancelar pedido online", handler: props.actionProvider.handleCancelarPedido, id: 5 },
    { text: "Necesito cuenta para comprar?", handler: props.actionProvider.handleNecesitoUsuario, id: 6 },
    { text: "Crear cuenta", handler: props.actionProvider.handleCrearUsuario, id: 7 },
    { text: "Reclamos", handler: props.actionProvider.handleReclamo, id: 8 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default HighSchoolBranches;