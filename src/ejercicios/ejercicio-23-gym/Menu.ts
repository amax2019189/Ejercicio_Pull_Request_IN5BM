import {Membresia} from "./model/Membresia";

export class Menu{

    private gimnasioClientes: Membresia[];

    constructor() {
        this.gimnasioClientes = [];
    }

   public mostrarClientes(): void {
        if (this.gimnasioClientes.length === 0) {
            console.log("No hay clientes en el sistema.");
            return;
        }

        this.gimnasioClientes.forEach((cliente, index) => {
            console.log(`[ID: ${index + 1}]`);
            cliente.mostrarInformacion(); 
            cliente.mostrarBeneficios(); 
        });
    }

  public registrarMembresia(nuevaMembresia: Membresia): void {
    this.gimnasioClientes.push(nuevaMembresia);
    nuevaMembresia.mostrarInformacion(); 
    console.log("La membresia ha sido registrada.");
}
}