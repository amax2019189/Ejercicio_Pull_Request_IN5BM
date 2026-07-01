
import promptSync from 'prompt-sync';
import { Tarjeta } from './models/Tarjeta';
import { Transferencia } from './models/Transferencia';
import { Efectivo } from './models/Efectivo';

const prompt = promptSync();
let repetir = true;

while (repetir) {
    console.log("\n=== SELECCIONE MÉTODO DE PAGO ===");
    console.log("1. Tarjeta");
    console.log("2. Transferencia");
    console.log("3. Efectivo");
    console.log("4. Salir");
    
    const tipo = prompt("Opción: ");

    if (tipo === "4") {
        console.log("Saliendo del programa... ¡Hasta luego!");
        repetir = false;
        break;
    }

    const entradaMonto = prompt("Ingrese el monto (Default: 150): ");
    const monto = entradaMonto.trim() === "" ? 150 : parseFloat(entradaMonto);

    const entradaMoneda = prompt("Ingrese la moneda (Default: GTQ): ");
    const moneda = entradaMoneda.trim() === "" ? "GTQ" : entradaMoneda;

    const entradaId = prompt("Ingrese el ID de transacción (Default: TXN-2025): ");
    const idTransaccion = entradaId.trim() === "" ? "TXN-2025" : entradaId;

    switch (tipo) {
        case "1":
            const entradaNumero = prompt("Número de tarjeta (Default: 1234567812345678): ");
            const numero = entradaNumero.trim() === "" ? "1234567812345678" : entradaNumero;

            const entradaVencimiento = prompt("Fecha de vencimiento (Default: 12/28): ");
            const vencimiento = entradaVencimiento.trim() === "" ? "12/28" : entradaVencimiento;

            const tarjeta = new Tarjeta(monto, moneda, idTransaccion, numero, vencimiento);
            
            tarjeta.procesarPago();
            if (tarjeta.validarPago()) {
                console.log(tarjeta.generarComprobante());
                tarjeta.mostrarInformacion();
            }
            break;

        case "2":
            const entradaBanco = prompt("Nombre del banco (Default: BI): ");
            const banco = entradaBanco.trim() === "" ? "BI" : entradaBanco;

            const entradaCuenta = prompt("Cuenta de destino (Default: 1234567890): ");
            const cuenta = entradaCuenta.trim() === "" ? "1234567890" : entradaCuenta;

            const transferencia = new Transferencia(monto, moneda, idTransaccion, banco, cuenta);
            
            transferencia.procesarPago();
            if (transferencia.validarPago()) {
                console.log(transferencia.generarComprobante());
                transferencia.mostrarInformacion();
            }
            break;

        case "3":
            const entradaEntregado = prompt("Monto entregado en efectivo (Default: 200): ");
            const entregado = entradaEntregado.trim() === "" ? 200 : parseFloat(entradaEntregado);

            const efectivo = new Efectivo(monto, moneda, idTransaccion, entregado);
            
            efectivo.procesarPago();
            if (efectivo.validarPago()) {
                console.log(efectivo.generarComprobante());
                efectivo.mostrarInformacion();
            }
            break;

        default:
            console.log("Opción no válida.");
            break;
    }
}