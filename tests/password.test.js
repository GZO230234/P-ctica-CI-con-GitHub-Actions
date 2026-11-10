import { describe, it, expect } from 'vitest';
import { validarPassword } from '../src/password.js';

describe('Validación de Contraseña', () => {
  it('valida una contraseña completamente segura', () => {
    const resultado = validarPassword('Abcdef1$');
    expect(resultado.valido).toBe(true);
    expect(resultado.errores).toHaveLength(0);
  });

  //Continuar las pruebas aqui abajo dentro del parentesis

  it('rechaza contraseñas sin números', () => {
    const resultado = validarPassword('Abcdefgh$');
    expect(resultado.valido).toBe(false);
    expect(resultado.errores).toContain('Falta al menos un número');
  });
  it('rechaza contraseñas sin caracteres especiales', () => {
    const resultado = validarPassword('Abcdefg1');
    expect(resultado.valido).toBe(false);
    expect(resultado.errores).toContain('Falta un carácter especial');
  });
  it('devuelve múltiples errores si la contraseña es muy débil', () => {
    const resultado = validarPassword('abc');
    expect(resultado.valido).toBe(false);
    expect(resultado.errores.length).toBeGreaterThan(1);
  });

});