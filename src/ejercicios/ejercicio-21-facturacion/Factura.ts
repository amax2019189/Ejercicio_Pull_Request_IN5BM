export class Factura {
public id: number;   
public fecha: Date;
public nombreCliente: string;

}

export class FacturaConsumidorFinal extends Factura {

public tipoFactura: string;


}

export FacturaCreditoFiscal extends Factura {

public tipoFactura: string;
public detalle: string
public saldo: number; 
}