//Inputs e botões
const valorGorjeta = document.querySelector('#valor');
const qntPessoa = document.querySelector('#pessoas');
const btnCalcular = document.querySelector('.Calcular');
const btnReset = document.querySelector('.Reset');
const even = document.querySelector('.porcentagem');

//Opções Porcentagem
const cincoPor = document.querySelector('.cinco');
const dezPor = document.querySelector('.dez');
const quinPor = document.querySelector('.quin');
const vintePor = document.querySelector('.vinte');
const cinquPor = document.querySelector('.cinq');

const btnPorcentagem = document.body.querySelectorAll(".porcentagem");

let valor = document.querySelector('.valor1');
let valor2 =  document.querySelector('.valor2');


even.addEventListener('click',(event)=>{
    event.preventDefault()
});

function Reset(){
    btnReset.classList.add('hide')
    btnCalcular.classList.remove('hide')
    valor.textContent = '00.00'
    valor2.textContent = '00.00'

};

function Calcular(){
    let total = valorGorjeta.value
    let qnt = qntPessoa.value
    let valorPagar = valor

    

    valorPessoa = total / qnt
    valor.textContent = valorPagar = `R$ ${valorPessoa}`
};

btnCalcular.addEventListener('click', function(){
    btnReset.classList.remove('hide')
    btnCalcular.classList.add('hide')

    Calcular()
});

btnReset.addEventListener('click', Reset);


function porcentagem(){
    cinco = cincoPor.value
    dez = dezPor.value 
    quin = quinPor.value 
    vinte = vintePor.value
    cinque = cinquPor.value
}

 cinco = cincoPor.value
 