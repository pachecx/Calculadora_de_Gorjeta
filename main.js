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

const customPor = document.querySelector('.custom');

const btnPorcentagem = document.body.querySelectorAll(".porcentagem button");

let valor = document.querySelector('.valor1');
let valor2 =  document.querySelector('.valor2');


even.addEventListener('click',(event)=>{
    event.preventDefault()
});

function Calcular(){
    
    let total = valorGorjeta.value
    let qnt = qntPessoa.value
    
    let custom = customPor.value / 100

    if(!total || !qnt){
        return alert('Insira todos os valores')
    }

    if(custom !== ''){
        totalGorjeta = total * custom
        porPessoa = totalGorjeta / qnt;
        
        valor.textContent = `R$ ${totalGorjeta.toFixed(2)}`;
        valor2.textContent  = `R$ ${porPessoa.toFixed(2)}`;
    }

    totalGorjeta = total * porcentagemSelecionada;
    porPessoa = totalGorjeta / qnt;

    valor.textContent = `R$ ${totalGorjeta.toFixed(2)}`;
    valor2.textContent  = `R$ ${porPessoa.toFixed(2)}`; 
};

btnPorcentagem.forEach(button => {
    button.addEventListener("click", function(){
      porcentagemSelecionada = parseFloat(button.value);
    });
});

function Reset(){
    btnReset.classList.add('hide')
    btnCalcular.classList.remove('hide')
    valor.textContent = '00.00'
    valor2.textContent = '00.00'

    valorGorjeta.value = ''
    qntPessoa.value = ''
    customPor.value = ''
};

btnCalcular.addEventListener('click', function(){
    btnReset.classList.remove('hide')
    btnCalcular.classList.add('hide')
    Calcular()
});

btnReset.addEventListener('click', Reset);