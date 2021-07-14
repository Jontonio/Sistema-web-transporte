
export class Car{
    placa:string
    serie:string
    modelo:string
    color:string
    fotoConductor:string
    idEmpresa:string
    targetaCirculacion: string
    soyConductor:string

    dniconductor?: string
    nombresConductor?: string
    apellidoPaterno?: string
    apellidoMaterno?: string
    estadoConductor?: string

    constructor(placa:string, 
                serie:string, 
                modelo:string, 
                color:string, 
                foto:string, 
                idEmpresa:string, 
                targetaCirculacion:string,
                soyConductor:string,
                dniconductor?:string,
                nombresConductor?:string,
                apellidoPaterno?:string,
                apellidoMaterno?:string,
                estadoConductor?:string){

        this.placa = placa;
        this.serie = serie;
        this.modelo = modelo;
        this.color = color;
        this.fotoConductor = foto;
        this.idEmpresa = idEmpresa;
        this.targetaCirculacion = targetaCirculacion;
        this.soyConductor = soyConductor;

        this.dniconductor = dniconductor;
        this.nombresConductor = nombresConductor;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.estadoConductor = estadoConductor;
    }

    get toObjectTwo(){
        return {
            placa: this.placa,
            serie: this.serie,
            modelo: this.modelo,
            color: this.color,
            fotoConductor: this.fotoConductor,
            targetaCirculacion: this.targetaCirculacion,
            idEmpresa: this.idEmpresa,
            soyConductor: this.soyConductor,
            dniconductor: this.dniconductor,
            nombresConductor: this.nombresConductor,
            apellidoPaterno: this.apellidoPaterno,
            apellidoMaterno: this.apellidoMaterno,
            estadoConductor: this.estadoConductor
        }
    }
    get toObjectOne(){
        return {
            placa: this.placa,
            serie: this.serie,
            modelo: this.modelo,
            color: this.color,
            fotoConductor: this.fotoConductor,
            idEmpresa: this.idEmpresa,
            targetaCirculacion: this.targetaCirculacion,
            soyConductor: this.soyConductor
        }
    }


}
        