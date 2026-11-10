export function validarCURP(curp) {
  if (typeof curp !== 'string') return false;
  // Regex estándar simplificada para estructura de CURP en México
  const regexCURP = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[0-9A-Z]{2}$/;
  return regexCURP.test(curp.toUpperCase());
}

export function validarRFC(rfc) {
  if (typeof rfc !== 'string') return false;
  // RFC de Persona Física (13 caracts) o Moral (12 caracts) - Corregido el rango de la homoclave
  const regexRFC = /^([A-ZÑ&]{3,4})\d{6}([A-V0-9][A-Z0-9][0-9A])$/;
  return regexRFC.test(rfc.toUpperCase());
}