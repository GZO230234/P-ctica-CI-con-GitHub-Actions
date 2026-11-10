export function validarCorreo(correo) {
  if (typeof correo !== 'string') return false;
  // Validación robusta básica de estructura de email
  const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regexCorreo.test(correo);
}