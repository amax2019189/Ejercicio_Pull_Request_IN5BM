export class MetodoPago {
    protected monto: number;
    protected moneda: string;
    protected idTransaccion: string;

    constructor(monto: number, moneda: string, idTransaccion: string) {
        this.monto = monto;
        this.moneda = moneda;
        this.idTransaccion = idTransaccion;
    }

    validarPago(): boolean {
        if (isNaN(this.monto) || this.monto <= 0) {
            console.log("Error: El monto debe ser un número mayor a cero.");
            return false;
        }
        if (!this.moneda || this.moneda.trim().length < 3) {
            console.log("Error: La moneda debe ser un código válido (ej. GTQ, USD).");
            return false;
        }
        if (!this.idTransaccion || this.idTransaccion.trim().length === 0) {
            console.log("Error: El ID de transacción no puede estar vacío.");
            return false;
        }
        return true;
    }

    procesarPago(): void {
        console.log(`Procesando pago de ${this.monto} ${this.moneda} con ID de transacción: ${this.idTransaccion}`);
    }

    generarComprobante(): string {
        return `Comprobante para el pago de ${this.monto} ${this.moneda} con ID: ${this.idTransaccion}`;
    }

    mostrarInformacion(): void {
        console.log(`ID: ${this.idTransaccion} | Monto: ${this.monto} | Moneda: ${this.moneda}`);
    }
}