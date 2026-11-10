import { describe, it, expect } from 'vitest';
import { validarRFC } from '../src/curp-rfc.js';

describe('Validaciones de RFC', () => {
  it('valida un RFC de persona física correcto', () => {
    expect(validarRFC('XAXX010101001')).toBe(true);
  });

  //Continuar las pruebas aqui abajo dentro del parentesis
  
});