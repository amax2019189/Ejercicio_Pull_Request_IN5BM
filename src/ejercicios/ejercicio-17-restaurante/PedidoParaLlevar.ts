import { Pedido } from "./Pedido";
export class PedidoParaLlevar extends Pedido {
    constructor(
        idPedido: number,
        cliente: string,
        montoBase: number,
    ) {
        super(idPedido, cliente, montoBase);
    }

    calcularRecargo(): number {
        return 5;
    }

    calcularTotal(): number {
        return this.montoBase + this.calcularRecargo();
    }
}