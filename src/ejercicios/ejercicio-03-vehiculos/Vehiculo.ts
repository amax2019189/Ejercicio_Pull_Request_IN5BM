// ---------- CLASE PADRE ----------
export class Vehiculo {
  protected marca: string;
  protected modelo: string;
  protected anio: number;
  protected precioBase: number;

  constructor(marca: string, modelo: string, anio: number, precioBase: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.precioBase = precioBase;
  }

  calcularImpuesto(): number {
    return this.precioBase * 0.12;
  }

  aplicarDescuento(): number {
    return 0;
  }

  calcularPrecioFinal(): number {
    const impuesto: number = this.calcularImpuesto();
    const descuento: number = this.aplicarDescuento();
    return this.precioBase + impuesto - descuento;
  }

  mostrarInformacion(): void {
    console.log(`--------------------------------------`);
    console.log(`Tipo: ${this.constructor.name}`);
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Año: ${this.anio}`);
    console.log(`Precio base: Q${this.precioBase.toFixed(2)}`);
    console.log(`Impuesto: Q${this.calcularImpuesto().toFixed(2)}`);
    console.log(`Descuento: Q${this.aplicarDescuento().toFixed(2)}`);
    console.log(`PRECIO FINAL: Q${this.calcularPrecioFinal().toFixed(2)}`);
  }
}