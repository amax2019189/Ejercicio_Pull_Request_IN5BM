import { CuentaBancaria } from "./CuentaBancaria";

export class CuentaAhorro extends CuentaBancaria {

    calcularInteres(): number {
        return this.saldo * 0.05;
    }
}