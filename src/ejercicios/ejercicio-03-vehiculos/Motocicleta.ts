import { Vehiculo } from "./Vehiculo";

export class Motocicleta extends Vehiculo {
  private cilindrada: number;

  constructor(marca: string, modelo: string, anio: number, precioBase: number, cilindrada: number) {
    super(marca, modelo, anio, precioBase);
    this.cilindrada = cilindrada;
  }

  aplicarDescuento(): number {
    return this.precioBase * 0.03;
  }
}