class Pessoa {
    nome: string;
    sobrenome: string;

    constructor(nome:string, sobrenome:string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }
};

const pessoa = new Pessoa("Camilla", "Barros");
console.log(pessoa.nomeCompleto()); //chamando dentro da classe pessoa o método nomeCompleto

// Carro

class Carro {
    modelo: string;
    marca: string;
    ano: number;

    constructor(modelo: string, marca: string, ano: number) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    };

    mostraCarro() {
        return `O carro do modelo ${this.modelo} é da marca ${this.marca} e foi fabricado no ano ${this.ano}`;
    };
};


const meuCarro = new Carro("Uno", "Fiat", 2008);
console.log(meuCarro.mostraCarro());

// Conta bancária

class Conta {
    nome: string;
    numeroConta: string;
    agencia: number;

    constructor(nome: string, numeroConta: string, agencia: number) {
        this.nome = nome;
        this.numeroConta = numeroConta;
        this.agencia = agencia;
    }

    informaConta(): string {
        return `Olá, ${this.nome}! O número da sua conta é ${this.numeroConta} e sua agencia é ${this.agencia}`
    }
};

const contaBanco = new Conta("Camilla", "82622", 107);
console.log(contaBanco.informaConta());

// Celular


class Celular {
    nomeContato: string;
    numero: number;
    email: string;

    constructor(nomeContato: string, numero: number, email: string) {
        this.nomeContato = nomeContato;
        this.numero = numero;
        this.email = email;
    }

    adicionaContato() {
        return `Adicionado na agenda: ${this.nomeContato}, ${this.numero}, ${this.email}`;
    }
}

const meuNumero = new Celular("Camilla Barros", 87970541, "camillaerbarros@gmail.com");
console.log(meuNumero.adicionaContato());