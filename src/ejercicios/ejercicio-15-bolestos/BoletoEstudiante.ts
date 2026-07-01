// Clase Hija: Boleto Estudiante
import { Boleto } from './Boleto';

export class BoletoEstudiante extends Boleto {
    porcentajeDescuento: number;

    constructor(codigo: number, nombreEvento: string, precioBase: number, porcentajeDescuento: number) {
        super(codigo, nombreEvento, precioBase);
        this.porcentajeDescuento = porcentajeDescuento;
    }

    aplicarDescuento(): number {
        return this.precioBase * this.porcentajeDescuento;
    }

    calcularPrecioFinal(): number {
        return this.precioBase - this.aplicarDescuento();
    }

    mostrarInformacion(): void {
        super.mostrarInformacion();
        const descuentoVisible = this.porcentajeDescuento * 100;
        console.log(`Tipo: Estudiante (${descuentoVisible}% desc)
            | Descuento: Q${this.aplicarDescuento()} 
            | Total: Q${this.calcularPrecioFinal()}`);
    }
}