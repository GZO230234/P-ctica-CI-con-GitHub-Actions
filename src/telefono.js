export function validarTelefono(telefono) {
  if (typeof telefono !== 'string') return false;
  const soloDigitos = telefono.replace(/[\s-]/g, '');
  return /^\d{10}$/.test(soloDigitos);
}