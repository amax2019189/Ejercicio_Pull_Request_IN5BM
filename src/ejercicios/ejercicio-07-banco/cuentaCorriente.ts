import { CuentaBancaria } from "./CuentaBancaria";

export class CuentaCorriente extends CuentaBancaria {

    calcularInteres(): number {
        return this.saldo * 0.02;
    }
}