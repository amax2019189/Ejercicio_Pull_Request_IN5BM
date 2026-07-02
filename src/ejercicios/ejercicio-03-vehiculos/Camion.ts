import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {
  private capacidadCarga: number;

  constructor(marca: string, modelo: string, anio: number, precioBase: number, capacidadCarga: number) {
    super(marca, modelo, anio, precioBase);
    this.capacidadCarga = capacidadCarga;
  }

  aplicarDescuento(): number {
    return this.precioBase * 0.08;
  }
}