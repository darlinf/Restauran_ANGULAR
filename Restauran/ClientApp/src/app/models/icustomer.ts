import { IFacturacion } from "./ifacturacion";

export interface ICustomer{
    id: number,
    nombre: string,
    facturacions: IFacturacion [] 
}