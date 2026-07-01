import { Entrega } from "./Entrega";

export class EntregaMoto extends Entrega {
  private costoBase = 10;
  private costoPorKm = 2.5;

  calcularCostoEntrega(): number {
    return this.costoBase + this.distancia * this.costoPorKm;
  }

  calcularTiempoEstimado(): number {
    //Velocidad promedio moto: 40 km/h
    return Math.ceil((this.distancia / 40) * 60);
  }
}
