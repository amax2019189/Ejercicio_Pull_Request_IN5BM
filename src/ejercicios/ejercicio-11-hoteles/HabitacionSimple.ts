import { Habitacion, EstadoHabitacion } from "./Habitacion";

export class HabitacionSimple extends Habitacion {
    constructor(
        noDeHabitacion: number,
        tamanio: string,
        cantidadDePersonas: number,
        estadoDeHabitacion: EstadoHabitacion,
        precioPorNoche: number
    ) {
        super(noDeHabitacion, tamanio, cantidadDePersonas, estadoDeHabitacion, precioPorNoche);
    }

    aplicarServicioExtra(): number {
        return 0;
    }

    calcularCostoReserva(cantidadDeNoches: number): number {
        return this.precioPorNoche * cantidadDeNoches + this.aplicarServicioExtra();
    }
}