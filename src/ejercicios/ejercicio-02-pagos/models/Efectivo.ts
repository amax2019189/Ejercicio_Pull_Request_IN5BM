import { MetodoPago } from "../MetodoPago";

export class Efectivo extends MetodoPago {
    private montoEntregado: number;

    constructor(monto: number, moneda: string, idTransaccion: string, montoEntregado: number) {
        super(monto, moneda, idTransaccion);
        this.montoEntregado = montoEntregado;
    }

    validarPago(): boolean {
        const baseValida = super.validarPago();
        const entregadoValido = !isNaN(this.montoEntregado) && this.montoEntregado >= this.monto;

        if (!entregadoValido) {
            console.log(`Error: El monto entregado (${this.montoEntregado}) es menor al monto a pagar (${this.monto}) o no es válido.`);
        }

        return baseValida && entregadoValido;
    }

    procesarPago(): void {
        if (this.validarPago()) {
            console.log(`Procesando pago en efectivo de ${this.monto} ${this.moneda} con ID de transacción: ${this.idTransaccion}`);
        } else {
            console.log("Pago en efectivo rechazado.");
        }
    }

    generarComprobante(): string {
        const cambio = this.montoEntregado - this.monto;
        return `Comprobante de pago en efectivo por un monto de ${this.monto} ${this.moneda}. Cambio: ${cambio}`;
    }

    mostrarInformacion(): void {
        console.log(`Efectivo | Monto: ${this.monto} | Entregado: ${this.montoEntregado}`);
    }
}