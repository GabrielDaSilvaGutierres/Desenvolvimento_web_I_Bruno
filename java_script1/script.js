

function imprimir(){
    console.log("Ola JS")
}

function logar(){

    let lg = document.querySelector("#login").value 
    let sn = document.querySelector("#pass").value
    //console.log("Seu nome é: " + lg + "/n SUa senha é: " + sn) // concatenização

    //alert("Seu nome é: " + lg + "/n SUa senha é: " + sn) // esse abre uma tela

    let usuario = "Gabriel"
    let senha = 12345

    let vetor = ["Abacaxi", "Banana", "Carambola"]

    //&& - condição 'e'
    //|| - condição 'ou'
    // == - comparação

    if(lg == usuario && sn == senha){
        alert("Logou!")  
    }
}

/*
var- globa -- deve evitar seu uso
let - local e pode mudar o estado de seu valor
const - o valor não pode ser mudado

JavaScript ela é dinâmic - variáveis recebem o tipo automaticamene

*/