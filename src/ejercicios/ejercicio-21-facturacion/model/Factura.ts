export abstract class Factura {
    //atributos
    public id: number;
    public fecha: Date;
    public cliente: string;

    //constructor
    constructor(id: number, fecha: Date, cliente: string) {
        this.id = id;
        this.fecha = fecha;
        this.cliente = cliente;
    }

    // 3. Métodos 
    abstract calcularSubtotal(): number;
    abstract calcularImpuesto(): number;
    abstract calcularTotal(): number;
    abstract mostrarInformacion(): void;
}