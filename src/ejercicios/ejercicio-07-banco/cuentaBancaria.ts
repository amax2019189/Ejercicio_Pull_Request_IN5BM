export abstract class CuentaBancaria {
    constructor(
        public titular: string,
        public numeroCuenta: number,
        public saldo: number
    ) {}

    depositar(monto: number): void {
        this.saldo += monto;
    }

    retirar(monto: number): void {
        if (monto <= this.saldo) {
            this.saldo -= monto;
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    abstract calcularInteres(): number;

    mostrarInformacion(): void {
        console.log(`Titular: ${this.titular}`);
        console.log(`Cuenta: ${this.numeroCuenta}`);
        console.log(`Saldo: Q${this.saldo}`);
    }
}