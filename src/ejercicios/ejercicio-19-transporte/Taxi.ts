import { Transporte } from "./Transporte";

export class Taxi extends Transporte {
    minutos: number;

    constructor(color: string, precioBase: number, minutos: number) {
        super("Taxi", color, precioBase);
        this.minutos = minutos;
    }

    calcularTarifa(): number {
        return this.precioBase + (this.minutos * 5);
    }
}