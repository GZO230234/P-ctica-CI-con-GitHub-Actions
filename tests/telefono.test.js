import { describe, it, expect } from 'vitest';
import { validarTelefono } from '../src/telefono.js';

describe('Validacion de Telefono', () => {
  it('valida un telefono de 10 digitos', () => {
    expect(validarTelefono('4491234567')).toBe(true);
  });

  it('valida un telefono con espacios', () => {
    expect(validarTelefono('449 123 4567')).toBe(true);
  });

  it('valida un telefono con guiones', () => {
    expect(validarTelefono('449-123-4567')).toBe(true);
  });

  it('valida un telefono con espacios y guiones mezclados', () => {
    expect(validarTelefono('449 123-4567')).toBe(true);
  });

  it('rechaza un texto vacio', () => {
    expect(validarTelefono('')).toBe(false);
  });

  it('rechaza un texto con solo espacios', () => {
    expect(validarTelefono('          ')).toBe(false);
  });

  it('rechaza un telefono con menos de 10 digitos', () => {
    expect(validarTelefono('449123456')).toBe(false);
  });

  it('rechaza un telefono con mas de 10 digitos', () => {
    expect(validarTelefono('44912345678')).toBe(false);
  });

  it('rechaza un telefono con letras', () => {
    expect(validarTelefono('44912345ab')).toBe(false);
  });

  it('rechaza un telefono con parentesis', () => {
    expect(validarTelefono('(449)1234567')).toBe(false);
  });

  it('rechaza un numero que no es texto', () => {
    expect(validarTelefono(4491234567)).toBe(false);
  });

  it('rechaza null y undefined', () => {
    expect(validarTelefono(null)).toBe(false);
    expect(validarTelefono(undefined)).toBe(false);
  });
});