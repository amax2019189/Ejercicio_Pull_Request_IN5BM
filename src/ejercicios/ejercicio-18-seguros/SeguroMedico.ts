import { Seguro } from "./seguro";

export class SeguroMedico extends Seguro {

    private enfermedadesPreexistentes: boolean;

    constructor(
        nombre: string,
        edad: number,
        montoAsegurado: number,
        enfermedadesPreexistentes: boolean
    ) {
        super(nombre, edad, montoAsegurado);
        this.enfermedadesPreexistentes = enfermedadesPreexistentes;
    }

    calcularPrima(): number {
        let prima = this.montoAsegurado * 0.06;

        if (this.enfermedadesPreexistentes) {
            prima += this.montoAsegurado * 0.04;
        }

        return prima;
    }

    calcularCobertura(): number {
        return this.montoAsegurado * 0.95;
    }

    mostrarInformacion(): void {
        console.log("===== Seguro Médico =====");
        console.log("Nombre:", this.nombre);
        console.log("Edad:", this.edad);
        console.log("Enfermedades preexistentes:", this.enfermedadesPreexistentes);
        console.log("Monto asegurado:", this.montoAsegurado);
        console.log("Prima:", this.calcularPrima());
        console.log("Cobertura:", this.calcularCobertura());
    }
}