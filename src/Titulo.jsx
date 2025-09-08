// src/Titulo.jsx
import React from 'react';

// O parâmetro `props` é um objeto com as propriedades passadas
const Titulo = (props) => {
  return <h1>{props.texto}</h1>;
};

export default Titulo;