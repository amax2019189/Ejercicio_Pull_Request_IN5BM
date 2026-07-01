// Clase Hija: Boleto General
import { Boleto } from "./Boleto";

export class BoletoGeneral extends Boleto {
    constructor(codigo: number, nombreEvento: string, precioBase: number) {
        super(codigo, nombreEvento, precioBase);
    }

    aplicarDescuento(): number {
        return 0;
    }

    calcularPrecioFinal(): number {
        return this.precioBase;
    }

    mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Tipo: General
            | Descuento: Q${this.aplicarDescuento()} 
            | Total: Q${this.calcularPrecioFinal()}`);
    }
}