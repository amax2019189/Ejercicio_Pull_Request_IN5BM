export abstract class Pedido {
    constructor(
        public idPedido: number,
        public cliente: string,
        public montoBase: number
    ) { }

    abstract calcularRecargo(): number;
    abstract calcularTotal(): number;

    public mostrarInformacion(): void {
        console.log(`Pedido ID: ${this.idPedido}`);
        console.log(`Cliente: ${this.cliente}`);
        console.log(`Monto Base: ${this.montoBase}`);
        console.log(`Recargo: ${this.calcularRecargo()}`);
        console.log(`Total: ${this.calcularTotal()}`);
        console.log('-----------------------------')
    }
}