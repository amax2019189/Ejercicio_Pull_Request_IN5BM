import { CuentaBancaria } from "./CuentaBancaria";

export class CuentaEmpresarial extends CuentaBancaria {

    calcularInteres(): number {
        return this.saldo * 0.03;
    }
}