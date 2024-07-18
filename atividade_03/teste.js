//let decimal3 = "3.6";
//console.log(parseInt(decimal3));


//let paraString = numeroInteiro.toString();
//console.log(typeof paraString);

// let dataUsuario = "04/11/1994"  //prompt("Digite uma data no formato dd/mm/aaaa: ");
// console.log(`você digitou a seguinte data ${dataUsuario} e ela é do tipo ${typeof dataUsuario}`);
// let dataSep = dataUsuario.split("/");
// let dataDia = parseInt(dataSep[0]);
// let dataMes = parseInt(dataSep[1]);
// let dataAno = parseInt(dataSep[2]);
// console.log(`O dia digitado foi ${dataDia} e é do tipo ${typeof dataDia}, o mês digitado foi ${dataMes} e é do tipo ${typeof dataMes} e o ano digitado foi ${dataAno} e é do tipo ${typeof dataAno}`);


// aa = "alguma coisa";
// bb = 18;
// console.log(aa + " " + bb);


// let cidade =  "Recife" //prompt("Digite o nome da sua cidade: ");

// if (cidade != null){
//     console.log(`${cidade.charAt(0) == "S" || cidade.charAt(0) == "s" ? "Essa Cidade tem a letra S como primeira letra" : "Essa Cidade não tem a letra S como primeira letra"}`)
// }


// sistema para verificar se pessoa é maior de 18 anos e pode ter carteira de habilitação

// const idade = Number(prompt("Digite a sua idade: "));
// console.log(typeof idade);

// if (idade < 18) {
//     // console.log("menor de 18");
//     alert("Você é menor de 18 anos e não pode ter carteira de habilitação");
// } else if (idade >= 18) {
//     console.log("Maior de 18");
//     alert("Você é maior de 18 anos e pode ter carteira de habilitação");
// } else {
//     alert("Nenuma idade localizada");
// };

// sistema para calcular valor e pontos perdidos na cnh

const gravidade = prompt("Digite o grau da gravidade da infração cometida por você: ");

if (gravidade == "leve"){
    alert(`A sua gravidade é do tipo ${gravidade}, você pode pagar uma multa de R$ 88,38 e perderá 3 pontos na CNH`);
} else if (gravidade == "média") {
    alert(`A sua gravidade é do tipo ${gravidade}, você pode pagar uma multa de R$ 130,30 e perderá 4 pontos na CNH`);
} else if (gravidade == "grave") {
    alert(`A sua gravidade é do tipo ${gravidade}, você pode pagar uma multa de R$ 195,23 e perderá 5 pontos na CNH`);
} else if (gravidade == "gravíssima") {
    alert(`A sua gravidade é do tipo ${gravidade}, você pode pagar uma multa de R$ 293,47 e perderá 7 pontos na CNH`);
} else {
    alert("Esta gravidade não foi encontrada.");
};