import { Vehiculo } from "./Vehiculo";

export class Automovil extends Vehiculo {
  private numPuertas: number;

  constructor(marca: string, modelo: string, anio: number, precioBase: number, numPuertas: number) {
    super(marca, modelo, anio, precioBase);
    this.numPuertas = numPuertas;
  }

  aplicarDescuento(): number {
    return this.precioBase * 0.05;
  }
}