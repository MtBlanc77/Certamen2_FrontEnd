import React from 'react';
import { Dropdown } from 'primereact/dropdown';

const peliculas = [
  { label: 'Todas', value: null },
  { label: 'Wifi Ralph', value: 'Wifi Ralph' },
  { label: 'Dragon Ball Super Broly', value: 'Dragon Ball Super Broly' },
  { label: 'Cascanueces', value: 'Cascanueces' },
  { label: 'El Grinch', value: 'El Grinch' }
];

function FiltroPeliculas({ filtroPeliculas, setFiltroPeliculas }) {
  return (
    <div style={{ margin: "1rem 0" }}>
      <Dropdown 
        value={filtroPeliculas} 
        options={peliculas}
        onChange={e => setFiltroPeliculas(e.value)}
        placeholder="Filtrar por película"
        style={{ width: '220px' }}
      />
    </div>
  );
}

export default FiltroPeliculas;
