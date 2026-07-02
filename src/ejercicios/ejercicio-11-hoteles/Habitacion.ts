export enum EstadoHabitacion {
    DISPONIBLE = "Disponible",
    OCUPADA = "Ocupada",
    MANTENIMIENTO = "Mantenimiento",
    RESERVADA = "Reservada"
}

export abstract class Habitacion {
    public noDeHabitacion: number;
    public tamanio: string;
    public cantidadDePersonas: number;
    public estadoDeHabitacion: EstadoHabitacion;
    public precioPorNoche: number;

    constructor(
        noDeHabitacion: number,
        tamanio: string,
        cantidadDePersonas: number,
        estadoDeHabitacion: EstadoHabitacion,
        precioPorNoche: number
    ) {
        this.noDeHabitacion = noDeHabitacion;
        this.tamanio = tamanio;
        this.cantidadDePersonas = cantidadDePersonas;
        this.estadoDeHabitacion = estadoDeHabitacion;
        this.precioPorNoche = precioPorNoche;
    }

    abstract calcularCostoReserva(cantidadDeNoches: number): number;
    abstract aplicarServicioExtra(): number;

    mostrarInformacion(): void {
        console.log(
            `Habitación #${this.noDeHabitacion} 
            - Tamaño: ${this.tamanio} 
            - Capacidad: ${this.cantidadDePersonas} 
            - Estado: ${this.estadoDeHabitacion} 
            - Precio por noche: $${this.precioPorNoche}`);
    }
}