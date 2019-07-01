import { Endereco } from './endereco';

export class NovoEvento {
    idOng: number;
    nome: string;
    descricao: string;
    local: Endereco;
    dataRealizacao: string;
    horaRealizacao: string;
    dataCriacao: string;
    srcImg: string; // passado apenas ao enviar, não é recebido por padrão

    constructor() {
        this.local = new Endereco();
    }
}