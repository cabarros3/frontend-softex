import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';



// Todas as classes começam com letra maiúscula

class Post {

    // criando atributos e definindo eles como privados, pois atributos declarados privados não podem ser acessados e modificados
    private _userName: string; // usar o underscore (underline) para nomear atributos privados
    private _titulo: string; // atributo privado
    private _dataPost: Date; // atributo privado
    private _numeroCurtidas: number; // atributo privado
    private _id: string; 
    private _saved: boolean;
    private _coment: string;
    private _comentQuant: number;
    private _sendQuant: number;



    // criando um construtor para "montar" o objeto post
    constructor(userName: string, titulo:string) {
        this._userName = userName; // inicialização da propriedade userName
        this._titulo = titulo; // inicialização da propriedade titulo
        this._dataPost = new Date(); // inicialização da propriedade dataPost utilizando Date() para gerar data e hora atual
        this._numeroCurtidas = 0; // inicialização do número de curtidas com 0
        this._id = uuidv4();
        this._coment = "";
        this._comentQuant = 0;
        this._sendQuant = 0; 
        this._saved = false;
    }

    // antes do método deve ser feito get e set


    // definindo get para mostrar/retornar userName
    get userName() {
        return this._userName;
    }

    // definindo o set para permitir a alteração do atributo userName
    set userName(userName:string) {
        this._userName = userName;
    }

    // definindo get para mostrar/retornar titulo
    get titulo() {
        return this._titulo;
    }

    get dataPost() {
        return this._dataPost;
    }

    get numeroCurtidas() {
        return this._numeroCurtidas;
    }

    get pegaId() {
        return this._id;
    }

    get saved() {
        return this._saved;
    }

    get coment() {
        return this._coment;
    }

    get comentQuant() {
        return this._comentQuant;
    }

    get sendQuant() {
        return this._sendQuant;
    }


    // criando um método para incrementar curtidas
    incrementarCurtidas() {
        this._numeroCurtidas += 1;
    }

    incrementarComent() {
        this._comentQuant += 1;
    }
    
    incrementarSend() {
        this._sendQuant += 1;
    }

    incrementarSaved() {
        this._saved = true;
    }

    ComentString(coment: string): string {
        return this._coment = coment;
    }
}

// criando função para gerar posts fakes

function criarPost() {

    const arrayPosts: object[] = []
    
    for (let i = 1; i <= 15; i++) {
        const post = new Post(faker.person.firstName(), faker.lorem.word());
        // post.incrementarCurtidas();
        // post.incrementarSaved();
        // post.incrementarSend();
        arrayPosts.push(post);
        console.log(post);
        console.log(i);
    }

    console.log(arrayPosts);
};

// chama a função
criarPost();