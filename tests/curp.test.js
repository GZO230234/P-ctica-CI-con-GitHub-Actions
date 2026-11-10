import { describe, it, expect } from 'vitest';
import { validarCURP } from '../src/curp-rfc.js';

describe('Validaciones de CURP', () => {
  it('valida un CURP correcto de persona física', () => {
    expect(validarCURP('XAXX010101HDFRRR09')).toBe(true);
  });

  //Continuar las pruebas aqui abajo dentro del parentesis
 it('rechaza si se pasa un booleano', () => {
       expect(validarCURP(true)).toBe(false);
     });
});
