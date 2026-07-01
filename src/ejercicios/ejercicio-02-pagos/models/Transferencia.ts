import { MetodoPago } from "../MetodoPago";

export class Transferencia extends MetodoPago {
    private banco: string;
    private cuentaDestino: string;

    constructor(monto: number, moneda: string, idTransaccion: string, banco: string, cuentaDestino: string) {
        super(monto, moneda, idTransaccion);
        this.banco = banco;
        this.cuentaDestino = cuentaDestino;
    }

    validarPago(): boolean {
        const baseValida = super.validarPago();
        const bancoValido = this.banco.trim().length >= 2;
        const cuentaValida = /^\d+$/.test(this.cuentaDestino) && this.cuentaDestino.length >= 10;

        if (!bancoValido) {
            console.log("Error: El nombre del banco no es válido.");
        }
        if (!cuentaValida) {
            console.log("Error: La cuenta de destino debe contener solo números y mínimo 10 dígitos.");
        }

        return baseValida && bancoValido && cuentaValida;
    }

    procesarPago(): void {
        if (this.validarPago()) {
            console.log(`Procesando transferencia bancaria al banco ${this.banco}, cuenta destino ${this.cuentaDestino} de ${this.monto} ${this.moneda} con ID de transacción: ${this.idTransaccion}`);
        } else {
            console.log("Transferencia bancaria rechazada por datos inválidos.");
        }
    }

    generarComprobante(): string {
        return `Comprobante de transferencia bancaria al banco ${this.banco}, cuenta destino ${this.cuentaDestino} por un monto de ${this.monto} ${this.moneda} con ID de transacción: ${this.idTransaccion}`;
    }

    mostrarInformacion(): void {
        console.log(`Banco: ${this.banco} | Cuenta: ${this.cuentaDestino} | Monto: ${this.monto}`);
    }
}