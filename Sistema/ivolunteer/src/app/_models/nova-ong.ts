import { Endereco } from './endereco';

export class NovaOng {
    username: string;
    senha: string;
    nome: string;
    descricao: string;
    doacao: string;
    dataFundacao: string;
    areas: string[];
    telefone: string;
    email: string;
    urlFacebook: string;
    urlWebsite: string;
    endereco: Endereco;

    constructor() {
        this.endereco = new Endereco();
    }
}