
// Receber dados
const pecas = document.querySelector('#numero-pacote');
const quantidade = document.querySelector('#numero-quantidade');
const calcular = document.querySelector('.botao');

// Mostra dados total pecas e valor total
const campoPecasTotal = document.querySelector('#total-pecas');
const campoPrecoTotal = document.querySelector('#preco-total');

//Mostra valor para R e E
const campoValrR = document.querySelector('.valor-r');
const campoValorE = document.querySelector('.valor-e');

//Botao Limpa campos
const reset = document.querySelector('.botao-limpa-campo');


let pecaTotal = 0;
let precoTotal = 0;

let valorR = 0;
let valorE = 0;

calcular.addEventListener('click', () => {
    pecaTotal = pecas.value * quantidade.value;

    campoPecasTotal.textContent = pecaTotal;


    precoTotal = pecaTotal * 0.45;
    campoPrecoTotal.textContent = precoTotal.toFixed(2) + "$";

    valorR = pecaTotal * 0.19;
    campoValrR.textContent = `${valorR.toFixed(2)}$`;

    valorE = pecaTotal * 0.26;
    campoValorE.textContent = `${valorE.toFixed(2)}$`;
})

reset.addEventListener('click', ()=>{
    pecas.value = '';
    quantidade.value = '';
    campoPecasTotal.textContent = "0";
    campoPrecoTotal.textContent = "0";
 

})




