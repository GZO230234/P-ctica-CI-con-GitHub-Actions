import { describe, it, expect } from 'vitest';
import { validarCorreo } from '../src/email.js';

describe('Validación de Correo Electrónico', () => {
  it('valida un correo estándar correcto', () => {
    expect(validarCorreo('usuario@example.com')).toBe(true);
  });

  //Continuar las pruebas aqui abajo dentro del parentesis

});