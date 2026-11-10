import { describe, it, expect } from 'vitest';
import { validarCURP } from '../src/curp-rfc.js';

describe('Validaciones de CURP', () => {
  it('valida un CURP correcto de persona física', () => {
    expect(validarCURP('XAXX010101HDFRRR09')).toBe(true);
  });

  // Pruebas añadidas para el número 2
  it('rechaza valores vacíos o nulos', () => {
    expect(validarCURP('')).toBe(false);
    expect(validarCURP(null)).toBe(false);
    expect(validarCURP(undefined)).toBe(false);
  });
  
  it('rechaza tipos de datos no válidos (números)', () => {
    expect(validarCURP(1234567890)).toBe(false);
  });
});