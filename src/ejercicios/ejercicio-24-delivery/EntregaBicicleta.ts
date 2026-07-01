import { Entrega } from "./Entrega";

export class EntregaBicicleta extends Entrega {
  private costoBase = 5;
  private costoPorKm = 1.5;

  calcularCostoEntrega(): number {
    return this.costoBase + this.distancia * this.costoPorKm;
  }

  calcularTiempoEstimado(): number {
    //Velocidad promedio bici: 15 km/h
    return Math.ceil((this.distancia / 15) * 60);
  }

  //Sobrescribe la validación: bicicleta solo cubre distancias cortas
  validarDistancia(): boolean {
    return this.distancia > 0 && this.distancia <= 15;
  }
}