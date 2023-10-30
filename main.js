//Inputs e botões
const valorGorjeta = document.querySelector('#valor');
const qntPessoa = document.querySelector('#pessoas');
const btnCalcular = document.querySelector('.Calcular');
const btnReset = document.querySelector('.Reset');
const even = document.querySelector('.porcentagem');

//Opções Porcentagem
const cincoPor = document.querySelector('.cinco');
const dezPor = document.querySelector('.dez');
const quinPor = document.querySelector('.qui');
const vintePor = document.querySelector('.vinte');
const cinquPor = document.querySelector('.cinq');


even.addEventListener('click',(event)=>{
    event.preventDefault()
})

function Calcular(){
    total = valorGorjeta.value
    qnt = qntPessoa.value
    valorPessoa = total / qnt

    return valorPessoa;
}

function porcentagem(){
    cinco = cincoPor.value
    dez = dezPor.value 
    quin = quinPor.value 
    vinte = vintePor.value
    cinque = cinquPor.value
}

btnCalcular.addEventListener('click', function(){
    console.log(Calcular())
})

cinco.addEventListener('click', function(){
    pagar = cinco * total
    console.log(pagar)
})