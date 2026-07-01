import { Pedido } from "./Pedido";
export class PedidoDelivery extends Pedido {
    constructor(
        idPedido: number,
        cliente: string,
        montoBase: number,
        public direccion: string
    ) {
        super(idPedido, cliente, montoBase);
    }

    calcularRecargo(): number {
        return 15;
    }

    calcularTotal(): number {
        return this.montoBase + this.calcularRecargo();
    }
}