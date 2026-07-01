import { Pedido } from "./Pedido";
import { PedidoMesa } from "./PedidoMesa";
import { PedidoParaLlevar } from "./PedidoParaLlevar";
import { PedidoDelivery } from "./PedidoDelivery";

export function ejecutarEjercicio17() {
    console.log("Ejercicio 17: Restaurante");

    const pedidos: Pedido[] = [
        new PedidoMesa(1, "Juan", 100, 5),
        new PedidoParaLlevar(2, "Maria", 50),
        new PedidoDelivery(3, "Carlos", 80, "Calle 17, Zona 18"),
    ];

    pedidos.forEach((pedido) => {
        pedido.mostrarInformacion();
    });
}