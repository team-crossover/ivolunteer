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
    constructor() {
        this.local = new Endereco();
    }
}