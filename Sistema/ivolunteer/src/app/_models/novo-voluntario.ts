export class NovoVoluntario {
    id: number;
    username: string;
    senha: string;
    nome: string;
    email: string;
    dataNascimento: string;
    areasInteressadas: string[] = [];
    idImgPerfil: number;
    srcImgPerfil: string; // passado apenas ao enviar, não é recebido por padrão

    constructor() {
    }
}