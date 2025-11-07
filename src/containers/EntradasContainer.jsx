import React, { useState } from 'react';
import AppToolbar from '../components/AppToolbar';
import ComprarEntrada from '../components/ComprarEntrada';
import EntradasTable from '../components/EntradasTable';
import FiltroPeliculas from '../components/FiltroPeliculas';

function EntradasContainer() {
  const [entradas, setEntradas] = useState([]);
  const [filtroPeliculas, setFiltroPeliculas] = useState(null);

  return (
    <div className="container">
      <AppToolbar />
      <ComprarEntrada setEntradas={setEntradas} />
      <FiltroPeliculas filtroPeliculas={filtroPeliculas} setFiltroPeliculas={setFiltroPeliculas} />
      <EntradasTable entradas={entradas} filtroPeliculas={filtroPeliculas} />
    </div>
  );
}

export default EntradasContainer;
