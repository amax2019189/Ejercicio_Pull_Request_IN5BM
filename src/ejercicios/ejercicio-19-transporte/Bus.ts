import { Transporte } from "./Transporte";

export class Bus extends Transporte {
    pasajeros: number;

    constructor(color: string, precioBase: number, pasajeros: number) {
        super("Autobús", color, precioBase);
        this.pasajeros = pasajeros;
    }

    calcularTarifa(): number {
        return this.precioBase + (this.pasajeros * 2);
    }
}