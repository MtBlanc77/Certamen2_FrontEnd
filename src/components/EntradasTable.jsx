import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function EntradasTable({ entradas, filtroPeliculas }) {

  const entradasFiltradas = filtroPeliculas == null
  ? entradas
  : entradas.filter(e => e.pelicula === filtroPeliculas);



  const valorTemplate = (rowData) => rowData.cantidad * 5000;

  return (
    <div style={{ margin: "2rem 0" }}>
      <DataTable value={entradasFiltradas} emptyMessage="No hay entradas registradas">
        <Column field="dia" header="Día" />
        <Column field="pelicula" header="Película" />
        <Column field="cantidad" header="Cantidad" />
        <Column field="tipoPago" header="Tipo de pago" />
        <Column header="Valor" body={valorTemplate} />
        <Column field="ciudad" header="Ciudad" />
      </DataTable>
    </div>
  );
}


export default EntradasTable;
