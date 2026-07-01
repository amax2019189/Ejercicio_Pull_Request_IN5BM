import { Producto } from "./Producto";

export class ProductoNacional extends Producto {
	private fabricante: string;
	private impuesto: number = 0.12;

	constructor(id: string, nombre: string, precio: number, stock: number, fabricante: string) {
		super(id, nombre, precio, stock);
		this.fabricante = fabricante;
	}

	calcularPrecioFinal(): number {
		return this.precio + this.precio * this.impuesto;
	}

	mostrarInformacion(): void {
		console.log(`Producto nacional\nID: ${this.id}\nNombre: ${this.nombre}\nPrecio base: Q${this.precio.toFixed(2)}\nImpuesto local (12%): Q${(this.precio * this.impuesto).toFixed(2)}\nPrecio final: Q${this.calcularPrecioFinal().toFixed(2)}\nStock: ${this.stock} unidades\nFabricante: ${this.fabricante}`);
	}

	getFabricante(): string {
		return this.fabricante;
	}

	setFabricante(fabricante: string): void {
		this.fabricante = fabricante;
	}
}
