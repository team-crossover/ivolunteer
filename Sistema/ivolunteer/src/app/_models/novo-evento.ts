import { Endereco } from './endereco';

export class NovoEvento {
    idOng: number;
    nome: string;
    descricao: string;
    local: Endereco;
    dataRealizacao: string;
    horaRealizacao: string;
    dataCriacao: string;
    areas: string[];
    img: string;

    constructor() {
        this.local = new Endereco();
    }
}