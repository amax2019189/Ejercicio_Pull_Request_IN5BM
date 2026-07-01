export abstract class Producto {
  protected id: string;
  protected nombre: string;
  protected precio: number;
  protected stock: number;

  constructor(id: string, nombre: string, precio: number, stock: number) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  abstract calcularPrecioFinal(): number;

  aplicarDescuento(porcentaje: number): number {
    if (porcentaje < 0 || porcentaje > 100) {
      throw new Error("El porcentaje debe estar entre 0 y 100");
    }
    return this.precio - this.precio * (porcentaje / 100);
  }

  actualizarStock(cantidad: number): void {
    this.stock += cantidad;
    if (this.stock < 0) {
      this.stock = 0;
      console.warn(`Stock insuficiente para ${this.nombre}. Se estableció a 0.`);
    }
  }

  abstract mostrarInformacion(): void;

  getId(): string {
    return this.id;
  }

  getNombre(): string {
    return this.nombre;
  }

  getPrecio(): number {
    return this.precio;
  }

  getStock(): number {
    return this.stock;
  }
}