//Clase de Padre de Delivery

export abstract class Entrega {
    protected distancia: number;
    protected peso: number;
    protected direccionDestino: string; 
    
    constructor(distancia: number, peso: number, direccionDestino: string) {  // <-- y aquí
        this.distancia = distancia;
        this.peso = peso;
        this.direccionDestino = direccionDestino;
    }

    //Metodos obligatorios para el ejercicio.
    abstract calcularCostoEntrega(): number;
    abstract calcularTiempoEstimado(): number;

    mostrarInformacion(): void {
        console.log("------ Información de la entrega ---");
        console.log(`Destino: ${this.direccionDestino}`);
        console.log(`Distancia: ${this.distancia} km`);
        console.log(`Peso: ${this.peso} kg`);
        console.log(`Costo: Q${this.calcularCostoEntrega().toFixed(2)}`);
        console.log(`Tiempo estimado: ${this.calcularTiempoEstimado()} min`);
        console.log(`Distancia válida: ${this.validarDistancia()}`);
    }

    validarDistancia(): boolean {
    return this.distancia > 0 && this.distancia <= 50;
  }

}
