/*começo do comentario
variavel = atributo

fim do comentario */
/* comentario é espaço temporario na memoria RAM */
/* atributo (variavel) - espaço reservado temporariamente na memoria do computador (RAM) */
/*
 let ano = 1994
 let nome = "Gabriel"
 let num = 33.4 (float)
 let conta = função

 //valor não altera
 const nomealuno = "Igor"

 //algo não importante
 ex: um joguinho
 //global
 var nome = "Eu"

 //use mais o let e o const

*/

function mostrar(){
    let n = document.querySelector("#nome").value
        console.log("Bem vindo " + n)
        alert("Ai sim JS, somos JS!"  + n)
                  }
                  //para - for
function para(){
    let n = document.querySelector("#num").value
for (leti=0;i<10;i=i+1){
    if (i == n){
console.log("Achou o numero: " + i)
break
    } else{
console.log("Não encontrou")}
}
}

//Enquanto = while
function enquanto(){
    let n = document.querySelector("#num").value
for (leti=0;i<12;i=i++){
    if (i == n){
console.log("Achou o numero: " + i)
break
    } else{
console.log("Não encontrou")}
}
}
//faça..enquanto = Do.. while
function facaenquanto(){
    let n = document.querySelector("#num").value
    let i = 0
    do{
    if (i == n){
    console.log("Achou o numero: " + i)
    break
        } else{
    console.log("Não encontrou")
    }
} while(i<10)
                       }

    //Selecionar = switch case
    function selecionar(){
        let n = parseInt(document.querySelector("#num").value) //conversão/promoção
        switch(n){
            case 1: console.log("voce escolheu a opção:" + n)
            break
            case 2: console.log("voce escolheu a opção:" + n)
            break
            case 3: console.log("voce escolheu a opção:" + n)
            break
        default: console.log("nenhuma das opções")
        }
    }
/*NÃO DESISTA DE APRENDER!*/
/* aprenda o JS e depois escolha outra linguagem*/
                  /*aprendizado por osmose*/