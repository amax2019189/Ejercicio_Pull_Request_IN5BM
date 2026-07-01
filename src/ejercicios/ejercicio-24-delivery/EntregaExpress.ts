import { Entrega } from "./Entrega";

export class EntregaExpress extends Entrega {
  private costoBase = 20;
  private costoPorKm = 4;
  private recargoExpress = 15;

  calcularCostoEntrega(): number {
    return this.costoBase + this.distancia * this.costoPorKm + this.recargoExpress;
  }

  calcularTiempoEstimado(): number {
    //Velocidad promedio express (vehículo prioritario): 60 km/h
    return Math.ceil((this.distancia / 60) * 60);
  }
}
