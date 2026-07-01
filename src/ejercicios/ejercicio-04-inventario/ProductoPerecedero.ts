import { Producto } from "./Producto";

export class ProductoPerecedero extends Producto {
	private fechaVencimiento: Date;
	private descuentoPorVencimiento: number = 0;

	constructor(id: string, nombre: string, precio: number, stock: number, fechaVencimiento: Date) {
		super(id, nombre, precio, stock);
		this.fechaVencimiento = fechaVencimiento;
	}

	calcularPrecioFinal(): number {
		this.calcularDescuentoPorVencimiento();
		return this.precio - this.precio * this.descuentoPorVencimiento;
	}

	private calcularDescuentoPorVencimiento(): void {
		const hoy = new Date();
		const diasParaVencer = Math.floor((this.fechaVencimiento.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));

		if (diasParaVencer < 0) {
			this.descuentoPorVencimiento = 1.0;
		} else if (diasParaVencer <= 3) {
			this.descuentoPorVencimiento = 0.5;
		} else if (diasParaVencer <= 7) {
			this.descuentoPorVencimiento = 0.3;
		} else if (diasParaVencer <= 15) {
			this.descuentoPorVencimiento = 0.15;
		} else {
			this.descuentoPorVencimiento = 0;
		}
	}

	mostrarInformacion(): void {
		this.calcularDescuentoPorVencimiento();
		const hoy = new Date();
		const diasParaVencer = Math.floor((this.fechaVencimiento.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
		const estado = diasParaVencer < 0 ? "Vencido" : diasParaVencer <= 3 ? "Próximo a vencer" : "Vigente";

		console.log(`Producto perecedero\nID: ${this.id}\nNombre: ${this.nombre}\nPrecio base: Q${this.precio.toFixed(2)}\nDescuento por vencimiento: ${(this.descuentoPorVencimiento * 100).toFixed(0)}%\nPrecio final: Q${this.calcularPrecioFinal().toFixed(2)}\nStock: ${this.stock} unidades\nFecha de vencimiento: ${this.fechaVencimiento.toLocaleDateString("es-GT")}\nDías para vencer: ${diasParaVencer}\nEstado: ${estado}`);
	}

	estaVencido(): boolean {
		const hoy = new Date();
		return this.fechaVencimiento < hoy;
	}

	getFechaVencimiento(): Date {
		return this.fechaVencimiento;
	}

	setFechaVencimiento(fecha: Date): void {
		this.fechaVencimiento = fecha;
	}

	getDiasParaVencer(): number {
		const hoy = new Date();
		return Math.floor((this.fechaVencimiento.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
	}
}
