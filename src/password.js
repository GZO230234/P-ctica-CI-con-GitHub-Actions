export function validarPassword(password) {
  if (typeof password !== 'string') return { valido: false, errores: ['Debe ser texto'] };
  
  const errores = [];
  if (password.length < 8) errores.push('Mínimo 8 caracteres');
  if (!/[A-Z]/.test(password)) errores.push('Falta al menos una mayúscula');
  if (!/[a-z]/.test(password)) errores.push('Falta al menos una minúscula');
  if (!/\d/.test(password)) errores.push('Falta al menos un número');
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errores.push('Falta un carácter especial');

  return {
    valido: errores.length === 0,
    errores
  };
}