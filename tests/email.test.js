import { describe, it, expect } from 'vitest';
import { validarCorreo } from '../src/email.js';

describe('Validación de Correo Electrónico', () => {
  it('valida un correo estándar correcto', () => {
    expect(validarCorreo('usuario@example.com')).toBe(true);
  });

  //Continuar las pruebas aqui abajo dentro del parentesis
    it('rechaza un correo sin usuario antes del @', () => {
    expect(validarCorreo('@example.com')).toBe(false);
  });

  it('rechaza un correo con extensión de una sola letra', () => {
    expect(validarCorreo('usuario@example.c')).toBe(false);
  });


});
