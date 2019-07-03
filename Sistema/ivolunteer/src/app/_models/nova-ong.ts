import { Endereco } from './endereco';

export class NovaOng {
    username: string;
    senha: string;
    nome: string;
    descricao: string;
    doacoes: string;
    dataFundacao: string;
    areas: string[] = [];
    telefone: string;
    email: string;
    urlFacebook: string;
    urlWebsite: string;
    endereco: Endereco;
    imgPerfil: string;

    constructor() {
        this.endereco = new Endereco();
    }
}