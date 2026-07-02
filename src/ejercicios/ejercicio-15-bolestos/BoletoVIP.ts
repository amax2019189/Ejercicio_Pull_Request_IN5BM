// Clase Hija: Boleto VIP
import { Boleto } from "./Boleto";

export class BoletoVIP extends Boleto {
    cargoServicio: number;

    constructor(codigo: number, nombreEvento: string, precioBase: number, cargoServicio: number) {
        super(codigo, nombreEvento, precioBase);
        this.cargoServicio = cargoServicio;
    }

    aplicarDescuento(): number {
        return 0;
    }

    calcularPrecioFinal(): number {
        return this.precioBase + this.cargoServicio;
    }

    mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Tipo: VIP
            | Cargo por Servicio: Q${this.cargoServicio} 
            | Total: Q${this.calcularPrecioFinal()}`);
    }
}