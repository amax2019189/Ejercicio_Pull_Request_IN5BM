import { Factura } from "../model/Factura";

export class FacturaCreditoFiscal extends Factura {
    private descuento = 20;

    calcularSubtotal(): number {
        return 200;
    }

    calcularImpuesto(): number {
        return this.calcularSubtotal() * 0.12;
    }

    calcularTotal(): number {
        return this.calcularSubtotal() + this.calcularImpuesto() - this.descuento;
    }

    mostrarInformacion(): void {
        console.log(
            `Esto es su credito fiscal en total:
        ID: ${this.id}
        Cliente: ${this.cliente}
        Subtotal: ${this.calcularSubtotal()}
        Impuesto: ${this.calcularImpuesto()}
        Descuento: ${this.descuento}
        Total: ${this.calcularTotal()}`)
    }
}