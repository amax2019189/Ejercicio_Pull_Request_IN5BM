import { Habitacion, EstadoHabitacion } from "./Habitacion";

export class Suite extends Habitacion {
    public serviciosIncluidos: string[];
    public cantidadDeAlmohadas: number;

    constructor(
        noDeHabitacion: number,
        tamanio: string,
        cantidadDePersonas: number,
        estadoDeHabitacion: EstadoHabitacion,
        precioPorNoche: number,
        serviciosIncluidos: string[],
        cantidadDeAlmohadas: number
    ) {
        super(noDeHabitacion, tamanio, cantidadDePersonas, estadoDeHabitacion, precioPorNoche);
        this.serviciosIncluidos = serviciosIncluidos;
        this.cantidadDeAlmohadas = cantidadDeAlmohadas;
    }

    aplicarServicioExtra(): number {
        let extra = 0;

        if (this.serviciosIncluidos.includes("jacuzzi")) {
            extra += 40;
        }
        if (this.serviciosIncluidos.includes("minibar")) {
            extra += 25;
        }
        if (this.serviciosIncluidos.includes("servicioAlCuarto")) {
            extra += 30;
        }

        extra += this.cantidadDeAlmohadas * 2;

        return extra;
    }

    calcularCostoReserva(cantidadDeNoches: number): number {
        let costo = this.precioPorNoche * cantidadDeNoches + this.aplicarServicioExtra();

        if (cantidadDeNoches >= 5) {
            costo = costo - costo * 0.10;
        }

        return costo;
    }

    mostrarServicios(): void {
        console.log("Servicios incluidos:", this.serviciosIncluidos.join(", "));
        console.log("Cantidad de almohadas:", this.cantidadDeAlmohadas);
    }
}