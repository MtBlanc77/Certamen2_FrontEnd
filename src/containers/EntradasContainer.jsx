import React, { useState, useEffect } from 'react';
import AppToolbar from '../components/AppToolbar';
import ComprarEntrada from '../components/ComprarEntrada';
import EntradasTable from '../components/EntradasTable';
import FiltroPeliculas from '../components/FiltroPeliculas';
import { getEntradas, addEntrada } from '../services/EntradaService';

function EntradasContainer() {
  const [entradas, setEntradas] = useState([]);
  const [filtroPeliculas, setFiltroPeliculas] = useState(null);

  
  useEffect(() => {
    setEntradas(getEntradas());
  }, []);

  
  const registrarEntrada = (nuevaEntrada) => {
    addEntrada(nuevaEntrada);
    setEntradas(getEntradas());
  };

  return (
    <div className="container">
      <AppToolbar />
      {/* Ahora pasas la función de registro como prop */}
      <ComprarEntrada onRegistrarEntrada={registrarEntrada} />
      <FiltroPeliculas filtroPeliculas={filtroPeliculas} setFiltroPeliculas={setFiltroPeliculas} />
      <EntradasTable entradas={entradas} filtroPeliculas={filtroPeliculas} />
    </div>
  );
}

export default EntradasContainer;
