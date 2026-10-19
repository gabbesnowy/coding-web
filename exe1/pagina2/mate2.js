//questão 1- par ou impar
function verificarParImpar() {
     const numepi = parseFloat(document.getElementById('numero_par_impar').valvue);
     const campoResultado = (document.getElementById('resultado_par_impar'));
    
    if (isNaN(numepi)) {
        campoResultado.textContent = "O misera sabe fazer isso direito??";
        campoResultado.style.color = "red";
        return;
    }
    if (numepi % 2 === 0) {
        campoResultado.textContent = `${numepi} é PAR`;
    } else {
        campoResultado.textContent = `${numepi} é ÍMPAR`;
    }

    campoResultado.style.color = "green";
}
// questão 2- aprovaçao escolar
function verificarAprovacao() {
    const nota1 = parseFloat(document.getElementById('nota_ap1').valvue);
    const nota2 = parseFloat(document.getElementById('nota_ap2').valvue);
    const campoResultado = (document.getElementById('resultado_aprovacao'));

    if (isNaN(nota1) || isNaN(nota2)) {
        campoResultado.textContent = "O misera sabe fazer isso direito??";
        campoResultado.style.color = "red";
        return;
 }
    const media = (nota1 + nota2) / 2

    if (media >= 7) {
       campoResultado.textContent = `Aprovado com media; ${media}`;
    }else {
         campoResultado.textContent = `Reprovado com media; ${media}`;}
    campoResultado.style.color = "green";
}
//questão 3- maior de dois
function verificarMaior() {
    const n1 = parseFloat(document.getElementById('maior_n1').valvue);
    const n2 = parseFloat(document.getElementById('maior_n2').valvue);
    const campoResultado = (document.getElementById('resultado_maior'));

    if (isNaN(n1) || isNaN(n2)) {
        campoResultado.textContent = "O misera sabe fazer isso direito??";
        campoResultado.style.color = "red";
        return;
 }
    const maior = n1 > n2 ? n1 : n2

    if (n1 === n2) {
       campoResultado.textContent = `Os dois são iguais po ${n1}`;
    }else {
         campoResultado.textContent = `O numero maior é ${maior}`;}
    campoResultado.style.color = "green";
}
// questão 4-
function calcularImcClassificacao() {
const peso = parseFloat(document.getElementById('imc_peso').valvue);
    const altura = parseFloat(document.getElementById('imc_altura').valvue);
    const campoResultado = (document.getElementById('resultado_imc_class'));

    if (isNaN(peso) || isNaN(altura)) {
        campoResultado.textContent = "O misera sabe fazer isso direito??";
        campoResultado.style.color = "red";
        return;
 }
    const IMC = (peso / altura^2)

    if (IMC < 18.5) {
       campoResultado.textContent = `A baixo do peso`;}
     if (IMC >= 18.5) {
       campoResultado.textContent = `Normal`;
    }if (IMC >= 25) {
         campoResultado.textContent = `acima do peso`;
    campoResultado.style.color = "green";}
}
// questão 5-
function verificarTriangulo() {
    const a = parseFloat(document.getElementById('lado_a').valvue);
    const b = parseFloat(document.getElementById('lado_b').valvue);
    const c = parseFloat(document.getElementById('lado_c').valvue);
    const campoResultado = (document.getElementById('resultado_triangulo'));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        campoResultado.textContent = "O misera sabe fazer isso direito??";
        campoResultado.style.color = "red";
        return;
 }

    if (a == b == c) {
       campoResultado.textContent = `Equilatero`;}
     if (a == b != c || a == c != b || b == c !=a) {
       campoResultado.textContent = `Isósceles`;
    }if (a != b != c) {
         campoResultado.textContent = `Escaleno`;
    campoResultado.style.color = "green";}
}
// questão 6
    function verificarBissexto() {
    const biss = parseFloat(document.getElementById('ano_bissexto').valvue);
    const campoResultado = (document.getElementById('resultado_bissexto'));

    if (isNaN(biss)) {
        campoResultado.textContent = "O misera sabe fazer isso direito??";
        campoResultado.style.color = "red";
        return;
 }

    const bx = biss % 4
    if(bx == 0)
        campoResultado.textContent = 'Ano bissexto'
    else
        campoResultado.textContent = 'Ano normal'
    campoResultado.style.color = "green";
}
// questão 7


function proximapg2() {
    window.location.href = "mate3.html";
}