import { describe, it, expect } from 'vitest';
import { validarCURP } from '../src/curp-rfc.js';

describe('Validaciones de CURP', () => {
  it('valida un CURP correcto de persona física', () => {
    expect(validarCURP('XAXX010101HDFRRR09')).toBe(true);
  });

  //Continuar las pruebas aqui abajo dentro del parentesis
  it('valida correctamente en minúsculas convirtiéndolas', () => {
    expect(validarCURP('xaxx010101hdfrrr09')).toBe(true);
  });
  it('rechaza CURP con caracteres especiales', () => {
    expect(validarCURP('XAXX010101HDFR*09')).toBe(false);
  });

});