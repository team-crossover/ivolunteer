import { Endereco } from './endereco';


export class Event {
    id: number;
    idOng: number;
    nome: string;
    descricao: string;
    local: Endereco;
    dataRealizacao: string;
    dataCriacao: string;
    areas: string[];
    idsVoluntariosConfirmados: number[];
    idImg : number;    
    srcImg : string; // passado apenas ao enviar, não é recebido por padrão
    constructor() {
        this.local = new Endereco();
    }
}