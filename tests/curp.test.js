import { describe, it, expect } from 'vitest';
import { validarCURP } from '../src/curp-rfc.js';

describe('Validaciones de CURP', () => {
  it('valida un CURP correcto de persona física', () => {
    expect(validarCURP('XAXX010101HDFRRR09')).toBe(true);
  });

  //Continuar las pruebas aqui abajo dentro del parentesis
  it('rechaza un CURP con formato incorrecto (letras faltantes)', () => {
    expect(validarCURP('XAXX010101HDF')).toBe(false);
  });

  it('rechaza un CURP con sexo inválido', () => {
    expect(validarCURP('XAXX010101XDFRRR09')).toBe(false);
  });
});
