// Questão 1 - Área do triângulo
function calcularAreat() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const campoResultado = (document.getElementById('resultado_areat'));

    if (isNaN(base) || isNaN(altura)) {
        campoResultado.textContent = "O misera sabe fazer isso direito??";
        campoResultado.style.color = "red";
        return;
    }

    const area = (base * altura) / 2;

    campoResultado.textContent = `A área é: ${area.toFixed(2)}`;
    campoResultado.style.color = "green";
}

//Questão 2- Area do retangulo
function calcularArear() {
  const comprimento = parseFloat(document.getElementById('comprimento').value)
  const largura = parseFloat(document.getElementById('largura').value)
  const campoResultado = (document.getElementById('resultado_arear'));

  if (isNaN(comprimento) || isNaN(largura)) {
        campoResultado.textContent = "Por favor, preencha todos os campos...";
        campoResultado.style.color = "red";
        return;
    }

    const area = comprimento * largura

    campoResultado.textContent = `A área é: ${area.toFixed(2)}`
    campoResultado.style.color = "green";
}

//questao 3- perimetro do quadrado
function calcularperimeto() {
  const lados = parseFloat(document.getElementById('lados').value)
  const campoResultado = (document.getElementById('resultado_perimeto'));

  if (isNaN(lados)) {
        campoResultado.textContent = "Por favor, preencha o campo misera...";
        campoResultado.style.color = "red";
        return;
    }

    const perimetro = lados * 4;

    campoResultado.textContent = `O perímetro é: ${perimetro.toFixed(2)}`
    campoResultado.style.color = "green";
}
//questão 4-area do circulo
function calcularAreac() {
    const raio = parseFloat(document.getElementById('raio1').value);
    const campoResultado = (document.getElementById('resultado_areac'));

    if (isNaN(raio)) {
        campoResultado.textContent = "O misera sabe fazer isso direito??";
        campoResultado.style.color = "red";
        return;
    }

    const area = Math.PI * (raio * raio);

    campoResultado.textContent = `A área é: ${area.toFixed(2)}`;
    campoResultado.style.color = "green";
}
//questão 5-volume do cubo
function calcularvolume() {
    const lado = parseFloat(document.getElementById('lado').value);
    const campoResultado = (document.getElementById('resultado_volume'));

    if (isNaN(lado)) {
        campoResultado.textContent = "O misera sabe fazer isso direito??";
        campoResultado.style.color = "red";
        return;
    }

    const volume = lado;

    campoResultado.textContent = `O volume é: ${volume.toFixed(2)}`;
    campoResultado.style.color = "green";
}
//questão 6-media de notas
function calcularmedia() {
    const nome = parseFloat(document.getElementById('nomeal').value);
    const pnota = parseFloat(document.getElementById('nota1').value);
    const snota = parseFloat(document.getElementById('nota2').value);
    const tnota = parseFloat(document.getElementById('nota3').value);
    const campoResultado = (document.getElementById('resultado_media'));

    if (isNaN(nome) || isNaN(pnota) || isNaN(snota) || isNaN(tnota)) {
        campoResultado.textContent = "O misera sabe fazer isso direito??";
        campoResultado.style.color = "red";
        return;
    }

    const media = (pnota + snota + tnota) / 2;

    campoResultado.textContent = `O aluno ${nome} ficou com média ${media.toFixed(2)}`;
    campoResultado.style.color = "green";
}
//questão 7-conversão de c para f
function converte() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const campoResultado = (document.getElementById('resultado_conversao'));

    if (isNaN(celsius)) {
        campoResultado.textContent = "O misera sabe fazer isso direito??";
        campoResultado.style.color = "red";
        return;
    }

    const fahrenheit = celsius * 1.8 + 32;

    campoResultado.textContent = `A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)}`;
    campoResultado.style.color = "green";
}
//questão 8- imc
function calcularimc() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('alturaps').value);
    const campoResultado = (document.getElementById('resultado_imc'));

    if (isNaN(peso) || isNaN(altura)) {
        campoResultado.textContent = "O misera sabe fazer isso direito??";
        campoResultado.style.color = "red";
        return;
    }

    const  imc = peso / (altura * altura);

    campoResultado.textContent = `${imc.toFixed(2)}`;
    campoResultado.style.color = "green";
}
//questão 9- juros sp
function calcularjuros(){
    const capital = parseFloat(document.getElementById('capital').value);
    const taxa = parseFloat(document.getElementById('taxa').value);
    const tempo = parseFloat(document.getElementById('tempo').value);
    const campoResultado = (document.getElementById('resultado_juros'));

    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
        campoResultado.textContent = "O misera sabe fazer isso direito??";
        campoResultado.style.color = "red";
        return;
    }

    const juros = capital * (taxa / 100) * tempo;

    campoResultado.textContent = `Os juros são de R$ ${juros.toFixed(2)}`;
    campoResultado.style.color = "green";
}
//questão 10- nv salario
function calcularaumento() {
    const salarioatual = parseFloat(document.getElementById('salarioat').value);
    const percentual = parseFloat(document.getElementById('perceaum').value);
    const campoResultado = (document.getElementById('resultado_aumento'));

    if (isNaN(salarioatual) || isNaN(percentual)) {
        campoResultado.textContent = "O misera sabe fazer isso direito??";
        campoResultado.style.color = "red";
        return;
    }

    const salario_novo = salarioatual * (1 + percentual / 100);

    campoResultado.textContent = `O novo sálario será de R$ ${salario_novo.toFixed(2)}`;
    campoResultado.style.color = "green";
}


//botão da proxima pagina
function proximapg1() {
    window.location.href = "mate2.html";
}