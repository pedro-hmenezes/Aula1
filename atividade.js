//Essa linha de código permite a ativação do prompt pelo terminal
const prompt = require('prompt-sync')(); 

//ex01 Nome e idade
nome = prompt('Digite seu nome: ');
idade = parseInt(prompt('Digite sua idade: '));
console.log('Olá, meu nome é' + ' ' + nome, 'e tenho' + ' ' + idade, 'anos.');

//ex02 Nome e cidade
var nome = prompt('Digite seu nome: ');
var cidade = prompt('Digite a cidade em que você nasceu: ');
console.log(nome, "é de", cidade);

//ex03 Operações Matemáticas
let num1 = parseFloat(prompt('Digite um número: '));
let num2 = parseFloat(prompt('Digite outro número: '));
console.log('Adição:', (num1 + num2).toFixed(1)); //O método toFixed permite diminuir as casas decimais dos números
console.log('Subtração:', (num1 - num2).toFixed(1));
console.log('Multiplicação:', (num1 * num2).toFixed(1));
console.log('Divisão:', (num1 / num2).toFixed(1));

//ex04 Calculando a área de um trângulo
const base = parseFloat(prompt('Digite a BASE do triângulo: '));
const altura = parseFloat(prompt('Digite a ALTURA do triângulo: '));
area = (base * altura) / 2;
console.log('A área do triângulo é:', (area).toFixed(1));

//ex05 Calculando a média
let nota1 = parseInt(prompt('Insira a nota 1: '));
let nota2 = parseInt(prompt('Insira a nota 2: '));
let nota3 = parseInt(prompt('Insira a nota 3: '));
media = ((nota1 + nota2 + nota3) / 3) //.toFixed(1);
console.log('O resultado da média é:', Math.round(media)); //O método Math.round faz um arredondamento do número

//ex06 Aplicando um desconto
let preco = parseInt(prompt('Digite o preço do produto: R$'));
let desc = preco - (preco * 25 / 100);
console.log(`O valor do desconto é de 25%. Seu pedido sairá por R$${desc.toFixed(2)}`);

//ex07 Imposto de Renda (Levando em consideração apenas 7.5% da Alíquota)
const bruto = parseFloat(prompt('Digite seu salário: R$'));
const calculo = bruto + (bruto * 7.5 / 100);
const imposto = (calculo - bruto);
console.log (`Seu salário é R$${bruto}. 
    Você deverá deduzir R$${imposto.toFixed(2)} do valor total.`);

//ex08 Convertendo Moedas
let valor = parseFloat(prompt('Digite o valor a ser convertido: R$'));
let dolar = valor / 5.48;
let euro = valor / 6.10;
let libras = valor / 7.29;
console.log(`Seu valor em Reais R$${valor.toFixed(2)}`);
console.log(`Dolar: $${dolar.toFixed(2)}`);
console.log(`Euro: €${euro.toFixed(2)}`);
console.log(`Libras: £${libras.toFixed(2)}`);

//ex09 Conversor de Temperatura
const celsius = parseFloat(prompt("Digite a temperatura em graus Celsius: "));
const conver = (celsius * 9/5) + 32;
console.log(`${celsius}°C. A temperatura em Fahrenheit é ${conver}°F`);

//ex10 Calculando o IMC (Indice de Massa Coporea)
let peso = parseFloat(prompt('Digite seu peso em: '));
let altura1 = parseFloat(prompt('Digite sua altura: '));
const imc = peso / (altura1 * altura1);
console.log(`Seu IMC é ${imc.toFixed(1)}`);
