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
    idImgPerfil: number;
    srcImgPerfil: string; // passado apenas ao enviar, não é recebido por padrão

    constructor() {
        this.endereco = new Endereco();
    }
}