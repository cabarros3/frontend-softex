// Todas as classes começam com letra maiúscula

class Post {

    // criando atributos e definindo eles como privados, pois atributos declarados privados não podem ser acessados e modificados
    private _userName: string; // usar o underscore (underline) para nomear atributos privados
    private _titulo: string; // atributo privado
    private _dataPost: Date; // atributo privado
    private _numeroCurtidas: number; // atributo privado


    // criando um construtor para "montar" o objeto post
    constructor(userName: string, titulo:string) {
        this._userName = userName; // inicialização da propriedade userName
        this._titulo = titulo; // inicialização da propriedade titulo
        this._dataPost = new Date(); // inicialização da propriedade dataPost utilizando Date() para gerar data e hora atual
        this._numeroCurtidas = 0; // inicialização do número de curtidas com 0
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

    // criando um método para incrementar curtidas
    incrementarCurtidas() {
        this._numeroCurtidas += 1;
    }
}

// instanciando a classe
const post1 = new Post("Camilla", "Foto 1");

// printando no console o autor da postagem pelo acesso (get) ao userName
console.log(post1.userName); // instância.propriedade

// alterando o autor da postagem pelo set do userName
post1.userName = "Elizabeth"; // instância.propriedade sendo atribuída um novo valor

// printando no console o autor da postagem pelo acesso (get) ao userName
console.log(post1.userName); // instância.propriedade


// printando no console o titulo da postagem
console.log(post1.titulo); // instância.propriedade
// printando no console a data da postagem
console.log(post1.dataPost); // instância.propriedade


// printando no console o número de curtidas
console.log(post1.numeroCurtidas)
// incrementando as curtidas usando o método incrementarCurtidas()
post1.incrementarCurtidas(); // é preciso usar a instância para chamar o método
post1.incrementarCurtidas();  // é preciso usar a instância para chamar o método
// printando no console o número de curtidas novamente
console.log(post1.numeroCurtidas);