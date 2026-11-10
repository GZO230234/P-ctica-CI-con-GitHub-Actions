import { describe, it, expect } from 'vitest';
import { validarPassword } from '../src/password.js';

describe('Validación de Contraseña', () => {
  it('valida una contraseña completamente segura', () => {
    const resultado = validarPassword('Abcdef1$');
    expect(resultado.valido).toBe(true);
    expect(resultado.errores).toHaveLength(0);
  });

  //Continuar las pruebas aqui abajo dentro del parentesis

});