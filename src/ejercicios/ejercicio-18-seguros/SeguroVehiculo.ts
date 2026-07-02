import { Seguro } from "./seguro";

export class SeguroVehiculo extends Seguro {

    private anioVehiculo: number;

    constructor(
        nombre: string,
        edad: number,
        montoAsegurado: number,
        anioVehiculo: number
    ) {
        super(nombre, edad, montoAsegurado);
        this.anioVehiculo = anioVehiculo;
    }

    calcularPrima(): number {
        let prima = this.montoAsegurado * 0.04;

        if ((2026 - this.anioVehiculo) > 10) {
            prima += this.montoAsegurado * 0.03;
        }

        return prima;
    }

    calcularCobertura(): number {
        return this.montoAsegurado * 0.90;
    }

    mostrarInformacion(): void {
        console.log("===== Seguro Vehículo =====");
        console.log("Nombre:", this.nombre);
        console.log("Edad:", this.edad);
        console.log("Año del vehículo:", this.anioVehiculo);
        console.log("Monto asegurado:", this.montoAsegurado);
        console.log("Prima:", this.calcularPrima());
        console.log("Cobertura:", this.calcularCobertura());
    }
}