import { vehichuloParqueo } from "./vehiculoParqueo";

export class motoParqueo extends vehichuloParqueo {
    
    calcularPago(): number {
        return this.horas * 5;
    }

    mostrarInformacion(): void {
        console.log("Placa: " + this.placa);
        console.log("Propietario: " + this.propietario);
        console.log("Horas: " + this.horas);
        console.log("Tipo: Moto");
    }
}