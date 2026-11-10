import { describe, it, expect } from 'vitest';
import { validarRFC } from '../src/curp-rfc.js';

describe('Validaciones de RFC', () => {
  it('valida un RFC de persona física correcto', () => {
    expect(validarRFC('XAXX010101001')).toBe(true);
  });

  //Continuar las pruebas aqui abajo dentro del parentesis
  // 8 //
  it('rechaza RFC con espacios en blanco internos', () => {
    expect(validarRFC('XAXX 010101')).toBe(false);
  });
  it('rechaza RFC con letras al final no alfanuméricas', () => {
    expect(validarRFC('XAXX010101A#1')).toBe(false);
  });
  it('acepta letras minúsculas transformándolas', () => {
    expect(validarRFC('xaxx010101001')).toBe(true);
  });
  
});