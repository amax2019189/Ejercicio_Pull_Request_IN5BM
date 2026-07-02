import { Factura } from "../model/Factura";

export class FacturaExportacion extends Factura {
    calcularSubtotal(): number {
        return 100;
    }


    calcularImpuesto(): number {
        return 0;
    }

    calcularTotal(): number {
        return this.calcularSubtotal();
    }


    mostrarInformacion(): void {
        console.log(`La exportacion fue de 
        ${this.calcularTotal()}
        ID: ${this.id}
        Cliente: ${this.cliente}
        Subtotal: ${this.calcularSubtotal()}
        Impuesto: ${this.calcularImpuesto()}
        Total: ${this.calcularTotal()}`);
    }
}
