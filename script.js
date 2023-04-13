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

fahrenheit = parseFloat(prompt("insira a unidade em F que sera convertida em k"))

kelvin= fahrenheit+273.15
console.log(kelvin+"K")

//quilowatt-hora é uma unidade de energia que é muito ultilizada para determinar o consumo de energia eletrica em uma casa 1 quilowatt-hora e R$:00,5

//a) calcule uma residencia que consuma 280 quilowatt-hora
let quilo=0.05

let residencia= 280*0.05
console.log(residencia)

//b) faça o program anterior fazer o desconte de 15% 



let residencia2= 280*0.05

residencia2= residencia2- 15/100

console.log(residencia2)



