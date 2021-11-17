alert('Bem vindo(a) a calculadora IMC');

let nome = prompt('Digite o seu primeiro nome:');
let peso = prompt('Digite seu peso em KG:');
let altura = prompt(`Agora, ${nome}, digite sua altura:`);

/* Variavel incorporada em uma função */
function imc(a, b, ) {
    return b / (a * a);
};
const teste = imc(altura, peso);

alert(`Seu Índice de Massa Corporal é: ${teste.toFixed(3)}`);

if (teste < 17) {
    alert('Muito abaixo do peso');

} else if (teste == 17 || teste <= 18.49) {
    alert('Você está abaixo do peso!');

} else if (teste == 18.5 || teste <= 24.99) {
    alert('Você está com o peso normal!');

} else if (teste == 25 || teste <= 29.99) {
    alert('Você está acima do peso!');

} else if (teste == 30 || teste <= 34.99) {
    alert('Cuidado, você está no nível I de Obesidade');

} else if (teste == 35 || teste <= 39.99) {
    alert('Cuidado, você está no nível II de Obesidade (Severa)');

} else {
    alert('Cuidado, você está no nível III de Obesidade (Mórbida)');
}