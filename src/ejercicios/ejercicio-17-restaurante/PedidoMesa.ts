import { Pedido } from "./Pedido";
export class PedidoMesa extends Pedido {
    constructor(
        idPedido: number,
        cliente: string,
        montoBase: number,
        public numeroMesa: number
    ) {
        super(idPedido, cliente, montoBase);
    }

    calcularRecargo(): number {
        return this.montoBase * 0.10;
    }
    calcularTotal(): number {
        return this.montoBase + this.calcularRecargo();
    }
}