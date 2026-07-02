export abstract class vehichuloParqueo {
    constructor(
        public placa: string,
        public propietario: string,
        public horas: number
    ) {}

    registrarEntrada(): void{
        console.log(`${this.placa} ingreso al parqueo.`);
    }

    registrarSalida(): void{
        console.log(`${this.placa} salio del parqueo.`);
    }

    mostrarInformacion(): void{
        console.log(`Placa: ${this.placa}`);
        console.log(`Propietario: ${this.propietario}`);
        console.log(`Horas: ${this.horas}`);
    }

    calcularHorasParqueo():number{
        return this.horas;
    }

    abstract calcularPago(): number;
}