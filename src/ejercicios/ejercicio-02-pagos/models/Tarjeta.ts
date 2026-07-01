import { MetodoPago } from "../MetodoPago";

export class Tarjeta extends MetodoPago {
    private numeroTarjeta: string;
    private fechaVencimiento: string;

    constructor(monto: number, moneda: string, idTransaccion: string, numeroTarjeta: string, fechaVencimiento: string) {
        super(monto, moneda, idTransaccion);
        this.numeroTarjeta = numeroTarjeta;
        this.fechaVencimiento = fechaVencimiento;
    }

    validarPago(): boolean {
        const baseValida = super.validarPago();
        const soloNumeros = /^\d+$/.test(this.numeroTarjeta);
        const tarjetaValida = this.numeroTarjeta.length === 16 && soloNumeros;
        const formatoFecha = /^(0[1-9]|1[0-2])\/\d{2}$/.test(this.fechaVencimiento);

        if (!tarjetaValida) {
            console.log("Error: El número de tarjeta debe tener exactamente 16 dígitos numéricos.");
        }
        if (!formatoFecha) {
            console.log("Error: La fecha de vencimiento debe tener el formato MM/AA.");
        }

        return baseValida && tarjetaValida && formatoFecha;
    }

    procesarPago(): void {
        if (this.validarPago()) {
            console.log(`Procesando pago con tarjeta ${this.numeroTarjeta} de ${this.monto} ${this.moneda} con ID de transacción: ${this.idTransaccion}`);
        } else {
            console.log("Pago con tarjeta rechazado por datos inválidos.");    
        }
    }

    generarComprobante(): string {
        const ultimosDigitos = this.numeroTarjeta.slice(-4);
        return `Comprobante de pago con tarjeta ****${ultimosDigitos} por un monto de ${this.monto} ${this.moneda} con ID de transacción: ${this.idTransaccion}`;
    }

    mostrarInformacion(): void {
        const ultimosDigitos = this.numeroTarjeta.slice(-4);
        console.log(`Tarjeta: ****${ultimosDigitos} | Monto: ${this.monto}`);
    }
}