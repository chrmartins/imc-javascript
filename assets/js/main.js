const form = document.querySelector("#form");
const mensagem = document.querySelector("#mensagem");

function recebeEventoForm(evento) {
  evento.preventDefault();

  let peso = document.querySelector("#peso").value;
  let altura = document.querySelector("#altura").value;

  let imc = Number(peso / (altura * altura)).toFixed(2);

  console.log(imc);

  if (imc < 1.85) {
    mensagem.innerHTML = `${imc} - Abaixo do peso`;
  } else if (imc >= 18.5 && imc <= 24.9) {
    mensagem.innerHTML = `${imc} - Peso normal`;
  } else if (imc >= 25 && imc <= 29.9) {
    mensagem.innerHTML = `${imc} - Sobrepeso`;
  } else if (imc >= 30 && imc <= 34.9) {
    mensagem.innerHTML = `${imc} - Obesidade grau 1`;
  } else if (imc >= 35 && imc <= 39.9) {
    mensagem.innerHTML = `${imc} - Obesidade grau 2`;
  } else if (imc > 40) {
    mensagem.innerHTML = `${imc} - Obesidade grau 3`;
  } else {
    mensagem.innerHTML = `${imc} - Peso ou Altura invalida`;
  }
}

form.addEventListener("submit", recebeEventoForm);

recebeEventoForm();
