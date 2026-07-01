export abstract class Habitacion {
    noDeHabitacion: number;
    tamanio:  string;
    cantidadDePersonas: number;;
    estadoDeHabitacion:string;

    constructor(noDeHabitacion: number, tamanio: string, cantidadDePersonas: number, estadoDeHabitacion: string){
        this.noDeHabitacion = noDeHabitacion;
        this.tamanio = tamanio;
        this.cantidadDePersonas = cantidadDePersonas;
        this.estadoDeHabitacion = estadoDeHabitacion;
    }
}