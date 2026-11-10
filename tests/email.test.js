import { describe, it, expect } from 'vitest';
import { validarCorreo } from '../src/email.js';

describe('Validación de Correo Electrónico', () => {
  it('valida un correo estándar correcto', () => {
    expect(validarCorreo('usuario@example.com')).toBe(true);
  });

  //Continuar las pruebas aqui abajo dentro del parentesis
    it('valida un correo con subdominios y puntos', () => {
    expect(validarCorreo('nombre.apellido@sub.domain.co')).toBe(true);
  });
  it('valida un correo con números y guiones', () => {
    expect(validarCorreo('user-name_123@domain-name.org')).toBe(true);
  });

    it('rechaza un correo sin usuario antes del @', () => {
    expect(validarCorreo('@example.com')).toBe(false);
  });

  it('rechaza un correo con extensión de una sola letra', () => {
    expect(validarCorreo('usuario@example.c')).toBe(false);
  });


});

