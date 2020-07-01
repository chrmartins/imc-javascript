// Captyra o evento de submit do formulario
const form = document.querySelector("#form");

// Escuta o evento submit do formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  // Verifica se foi digitado um valor valido (numero)
  if (!peso) {
    setResultado("Peso Invalido", false);
    return;
  }
  // Verifica se foi digitado um valor valido (numero)
  if (!altura) {
    setResultado("Altura Invalida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc)

  const msg = `Seu IMC e ${imc} (${nivelImc})`

  setResultado(msg, true)
});

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

// Cria um elemento p - paragrafo
function criaP() {
  const p = document.createElement("p");
  return p;
}

// trata da mensagem a ser exibida
function setResultado(msg, isValid) {
  const resultado = document.querySelector("#mensagem");
  resultado.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado')
  } else {
    p.classList.add('bad')
  }

  p.innerHTML = msg;

  resultado.appendChild(p);
}
