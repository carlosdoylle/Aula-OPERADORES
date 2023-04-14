  let kelvin=null
let fahrenheit=null
let celsius=null

//a) calcule e mostre o valor de 77 grus F em K mostrando a unidade no console tambem
  fahrenheit= 77

 kelvin= (fahrenheit-32) * 5/9 + 273.15

 console.log(kelvin+ "K")


//b) calcule e mostre o valor de 80 grus C em F mostrando a unidade no console tambem
 kelvin=null
fahrenheit=null
 celsius=null

 celsius=80

 fahrenheit= (celsius*9/5)+32

 console.log(fahrenheit+"°F")

//c) calcule e mostre o valor de 30 grus F em K mostrando a unidade no console tambem
kelvin=null
fahrenheit=null
 celsius=null

 fahrenheit=30

 kelvin= fahrenheit+273.15
 console.log(kelvin+"K")

 //d) altere o ultimo item para que o usuario insira o valor em graus celsius que ele deseja converter

 kelvin=null
 fahrenheit=null
celsius=null
/* fahrenheit = parseFloat(prompt("insira a unidade em F que sera convertida em k"))
 */
kelvin= fahrenheit+273.15
console.log(kelvin+"K")

//quilowatt-hora é uma unidade de energia que é muito ultilizada para determinar o consumo de energia eletrica em uma casa 1 quilowatt-hora e R$:00,5

//a) calcule uma residencia que consuma 280 quilowatt-hora
let quilo=0.05

let residencia= 280*0.05
console.log(residencia)

//b) faça o program anterior fazer o desconte de 15% 



let residencia2= 280*quilo


 residencia2=  (85/100) *residencia2

console.log("o valor total a ser pago com desconto de 15% é "+residencia2+"R$")


//solicitar o nome do usuario e 3notas calcular a media
//informar o nome e a media do usuario e se a media for maior que 6
//dar parabens e se for menor que 6 informar que foi reprovado

/* let nome = prompt("insira seu nome ")
let nota1= Number(prompt("insira a sua nota"))
let nota2= Number(prompt("insira a sua nota"))
let nota3= Number(prompt("insira a sua nota")) */

/* let totalNota= (nota1+nota2+nota3) /3;

if (totalNota>= 7){
  console.log(nome+" sua media foi" +totalNota+" pontos")
  console.log("aprovado!!")
}else{
  console.log(nome+" sua media foi" +totalNota+" pontos")
  console.log("Reprovado!!")
} */

//solicitar um numero para usuario
//validar se e par ou imapar e imprimir

/* let numero= Number(prompt("insira a um numero"))

let numero2=numero

let resto= numero2 %=2;

if(resto===0 ){
  alert(numero+" é par ")
  console.log(numero+" é par ")
}else{
  alert(numero+" é impar ")
  console.log(numero+" é impar ")
} */


//solicitar 2 numeros para o usuario 
//e exibir o maior

let num1= Number(prompt("insira a um numero"))
let num2= Number(prompt("insira a um numero"))
let num3= Number(prompt("insira a um numero"))


if (num1 >= num2 && num1 >= num3) {
  console.log("O maior número é: " + num1);

} else if (num2 >= num3) {
  console.log("O maior número é: " + num2);

} else {
  console.log("O maior número é: " + num3);
}

  