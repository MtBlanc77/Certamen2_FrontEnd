const STORAGE_KEY = 'entradasCine';


export function getEntradas() {
  const str = window.localStorage.getItem(STORAGE_KEY);
  return str ? JSON.parse(str) : [];
}


export function addEntrada(nuevaEntrada) {
  const entradas = getEntradas();
  entradas.push(nuevaEntrada);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entradas));
}


export function clearEntradas() {
  window.localStorage.removeItem(STORAGE_KEY);
}
