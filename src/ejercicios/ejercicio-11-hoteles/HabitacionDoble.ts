import { Habitacion, EstadoHabitacion } from "./Habitacion";

export enum TipoDeVista {
    MAR = "Mar",
    CIUDAD = "Ciudad",
    JARDIN = "Jardin"
}

export class HabitacionDoble extends Habitacion {
    incluyeDesayuno: boolean;
    tipoDeVista: TipoDeVista;

    constructor(
        noDeHabitacion: number,
        tamanio: string,
        cantidadDePersonas: number,
        estadoDeHabitacion: EstadoHabitacion,
        precioPorNoche: number,
        incluyeDesayuno: boolean,
        tipoDeVista: TipoDeVista
    ) {
        super(noDeHabitacion, tamanio, cantidadDePersonas, estadoDeHabitacion, precioPorNoche);
        this.incluyeDesayuno = incluyeDesayuno;
        this.tipoDeVista = tipoDeVista;
    }

    aplicarServicioExtra(): number {
        let extra = 0;

        if (this.incluyeDesayuno) {
            extra += 15;
        }

        if (this.tipoDeVista === TipoDeVista.MAR) {
            extra += 20;
        } else if (this.tipoDeVista === TipoDeVista.CIUDAD) {
            extra += 10;
        }

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
        console.log("Desayuno incluido:", this.incluyeDesayuno);
        console.log("Tipo de vista:", this.tipoDeVista);
    }
}