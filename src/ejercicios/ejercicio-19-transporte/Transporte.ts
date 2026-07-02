export class Transporte {
    nombre: string;
    color: string;
    precioBase: number;

    constructor(nombre: string, color: string, precioBase: number) {
        this.nombre = nombre;
        this.color = color;
        this.precioBase = precioBase;
    }

    calcularTarifa(): number {
        return this.precioBase;
    }

    iniciarViaje(): void {
        console.log("El viaje de " + this.nombre + " va a comenzar");
    }

    finalizarViaje(): void {
        console.log("El viaje de " + this.nombre + " ya terminó");
    }

    mostrarInformacion(): void {
        console.log("Transporte: " + this.nombre + ", Color: " + this.color + ", Precio: " + this.calcularTarifa());
    }

    calcularTiempoEstimado(): number {
        return 10;
    }
}

/*
Index.ts:
import { Bus } from "./ejercicios/ejercicio-19-transporte/Bus";
import { Taxi } from "./ejercicios/ejercicio-19-transporte/Taxi";
import { Metro } from "./ejercicios/ejercicio-19-transporte/Metro";

const miBus = new Bus("Rojo", 5, 10);
miBus.iniciarViaje();
miBus.mostrarInformacion();
miBus.finalizarViaje();

console.log("---");

const miTaxi = new Taxi("Amarillo", 15, 8);
miTaxi.iniciarViaje();
miTaxi.mostrarInformacion();
miTaxi.finalizarViaje();

console.log("---");

const miMetro = new Metro("Blanco", 4, 6);
miMetro.iniciarViaje();
miMetro.mostrarInformacion();
miMetro.finalizarViaje();*/