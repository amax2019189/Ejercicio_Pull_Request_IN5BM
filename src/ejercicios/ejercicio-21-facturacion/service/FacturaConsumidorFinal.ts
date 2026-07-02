import { Factura } from "../model/Factura";

export class FacturaConsumidorFinal extends Factura {
    calcularSubtotal(): number {
        return 100;
    }

    calcularImpuesto(): number {
        return this.calcularSubtotal() * 0.21;
    }

    calcularTotal(): number {
        return this.calcularSubtotal() + this.calcularImpuesto();
    }

    mostrarInformacion(): void {
        console.log(`Esto consume en total: 
        ID: ${this.id}
        Cliente: ${this.cliente}
        Fecha: ${this.fecha}
        Subtotal: ${this.calcularSubtotal()}
        Impuesto: ${this.calcularImpuesto()}
        Total: ${this.calcularTotal()}`)
    }
}