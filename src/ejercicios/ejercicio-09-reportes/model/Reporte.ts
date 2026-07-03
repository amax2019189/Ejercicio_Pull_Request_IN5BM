import PromptSync from "prompt-sync";

const prompt = PromptSync();

export abstract class Reporte{
    //Atributos
    id: number;
    fecha: Date;
    titulo: string;
    asunto: string;
    reporte: string;
    nexId: number = 1;
    
    //Constructor
    constructor(
        id: number,
        fecha: Date,
        titulo: string,
        asunto: string,
        reporte: string
    ){
        this.id = id;
        this.fecha = fecha;
        this.titulo = titulo;
        this.asunto = asunto;
        this.reporte = reporte;
    }
    //Metodos
    abstract generarDatos(): void;
    abstract mostrarDatos(): void;
    //Con este metodo no sabia que hacer entonces lo deje como una validacion simple
    //Y no se porque este no puede ser abstracto
    //los otros de aarriba son abstractos para que vayan vacios
    protected validarDatos(): boolean{
        if (this.id > 0){
            console.log("El registro existe :D")
            return true
        }else{
            console.log("Registro no existente :/")
            return false;
        }
    }

}

