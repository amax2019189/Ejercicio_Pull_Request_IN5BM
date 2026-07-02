import { Transporte } from "./Transporte";

export class Metro extends Transporte {
    estaciones: number;

    constructor(color: string, precioBase: number, estaciones: number) {
        super("Metro", color, precioBase);
        this.estaciones = estaciones;
    }

    calcularTarifa(): number {
        return this.precioBase + (this.estaciones * 3);
    }
}