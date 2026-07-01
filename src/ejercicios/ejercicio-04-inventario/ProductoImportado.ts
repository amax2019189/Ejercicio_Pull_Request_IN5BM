import { Producto } from "./Producto";

export class ProductoImportado extends Producto {
	private paisOrigen: string;
	private arancel: number = 0.25;
	private costoTransporte: number;

	constructor(id: string, nombre: string, precio: number, stock: number, paisOrigen: string, costoTransporte: number) {
		super(id, nombre, precio, stock);
		this.paisOrigen = paisOrigen;
		this.costoTransporte = costoTransporte;
	}

	calcularPrecioFinal(): number {
		const arancelCosto = this.precio * this.arancel;
		return this.precio + arancelCosto + this.costoTransporte;
	}

	mostrarInformacion(): void {
		const arancelCosto = this.precio * this.arancel;
		console.log(`Producto importado\nID: ${this.id}\nNombre: ${this.nombre}\nPrecio base: Q${this.precio.toFixed(2)}\nArancel aduanal (25%): Q${arancelCosto.toFixed(2)}\nCosto de transporte: Q${this.costoTransporte.toFixed(2)}\nPrecio final: Q${this.calcularPrecioFinal().toFixed(2)}\nStock: ${this.stock} unidades\nPaís de origen: ${this.paisOrigen}`);
	}

	getPaisOrigen(): string {
		return this.paisOrigen;
	}

	setPaisOrigen(paisOrigen: string): void {
		this.paisOrigen = paisOrigen;
	}

	getCostoTransporte(): number {
		return this.costoTransporte;
	}

	setCostoTransporte(costo: number): void {
		this.costoTransporte = costo;
	}
}
