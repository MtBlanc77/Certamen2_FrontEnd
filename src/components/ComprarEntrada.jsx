import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { SelectButton } from 'primereact/selectbutton';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Message } from 'primereact/message';

const dias = [
  { label: 'Lunes', value: 'Lunes' },
  { label: 'Martes', value: 'Martes' },
  { label: 'Miércoles', value: 'Miércoles' },
  { label: 'Jueves', value: 'Jueves' },
  { label: 'Viernes', value: 'Viernes' }
];

const tiposPago = ['Efectivo', 'Tarjeta'];

const peliculas = [
  { label: 'Wifi Ralph', value: 'Wifi Ralph' },
  { label: 'Dragon Ball Super Broly', value: 'Dragon Ball Super Broly' },
  { label: 'Cascanueces', value: 'Cascanueces' },
  { label: 'El Grinch', value: 'El Grinch' }
];

function ComprarEntrada({ setEntradas }) {
  const [form, setForm] = useState({
    dia: null,
    tipoPago: null,
    cantidad: null,
    ciudad: '',
    pelicula: null
  });
  const [errores, setErrores] = useState([]);
  const toast = React.useRef(null);

  const manejarCambio = (campo, valor) => {
    setForm({ ...form, [campo]: valor });
  };

  const validar = () => {
    let err = [];
    if (!form.dia) err.push('Debe seleccionar un día');
    if (!form.tipoPago) err.push('Debe elegir el tipo de pago');
    if (!form.cantidad || form.cantidad <= 0) err.push('Cantidad debe ser mayor que 0');
    if (!form.ciudad) err.push('Debe ingresar ciudad');
    if (!form.pelicula) err.push('Debe seleccionar película');
    setErrores(err);
    return err.length === 0;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (validar()) {
      setEntradas(prev => [
        ...prev,
        { ...form }
      ]);
      toast.current.show({ severity: 'success', summary: 'Entrada registrada correctamente', life: 2500 });
      setForm({ dia: null, tipoPago: null, cantidad: null, ciudad: '', pelicula: null });
      setErrores([]);
    }
  };

  return (
    <div>
      <Toast ref={toast} />
      <form onSubmit={manejarEnvio}>
        <div className="p-field">
          <label>Día</label>
          <Dropdown value={form.dia} options={dias} onChange={e => manejarCambio('dia', e.value)} placeholder="Seleccionar día" />
        </div>
        <div className="p-field">
          <label>Tipo de pago</label>
          <SelectButton value={form.tipoPago} options={tiposPago} onChange={e => manejarCambio('tipoPago', e.value)} />
        </div>
        <div className="p-field">
          <label>Cantidad</label>
          <InputNumber value={form.cantidad} onValueChange={e => manejarCambio('cantidad', e.value)} min={1} />
        </div>
        <div className="p-field">
          <label>Ciudad</label>
          <InputText value={form.ciudad} onChange={e => manejarCambio('ciudad', e.target.value)} />
        </div>
        <div className="p-field">
          <label>Película</label>
          <ListBox value={form.pelicula} options={peliculas} onChange={e => manejarCambio('pelicula', e.value)} />
        </div>
        {errores.length > 0 &&
          <div>
            {errores.map((err, idx) => (
              <Message severity="error" text={err} key={idx} />
            ))}
          </div>
        }
        <Button label="Registrar Entrada" type="submit" className="mt-2" />
      </form>
    </div>
  );
}

export default ComprarEntrada;
