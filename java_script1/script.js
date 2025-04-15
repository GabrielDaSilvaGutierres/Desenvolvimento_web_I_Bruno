

function imprimir(){
    console.log("Ola JS")
}

function logar(){

    let lg = document.querySelector("#login").value 
    let sn = parseInt(document.querySelector("#pass").value)
    //console.log("Seu nome é: " + lg + "/n SUa senha é: " + sn) // concatenização

    //alert("Seu nome é: " + lg + "/n SUa senha é: " + sn) // esse abre uma tela

    let usuario = "Gabriel"
    let senha = 12345

    //let vetor = ["Abacaxi", "Banana", "Carambola"]

     let login = ["Ana", "Bruno", "Carlos"]
     let pass = [1234, 2222, 4444]

    //JSON - JavaScript Object Notation

    let dados = [
                 {id:1, nome:"Paul", login:"paul", senha:1234, email:"paul@gmail.com",},
                 {id:2, nome:"Rango", login:"rango", senha:1244, email:"rango@gmail.com",},
                 {id:3, nome:"john", login:"john", senha:1334, email:"john@gmail.com",}
                ]
    //&& - condição 'e'
    //|| - condição 'ou'
    // == - comparação

    for(let i=0;i<dados.length; i++){
        //i++ é: 
        // i = i + 1//1
        //i = i + 1 //2
        //i = i + 1 //3
        //é possivel colocar i = i + 1 , mas é estranho
        if(lg == dados[i].login && sn == dados[i].senha){
            alert("Logou!" + dados.lenght)
            //console.log(vetor[2])
            alert("Seu nome é: " + dados[i].nome + "/n E-mail: " + dados[i].email)
            //ele alerta e mostra nome e email que é puxado dos dados
            alert(dados[i].nome)
            //ele alerta e vai pro dados
            console.log("Seu nome é: " + dados[i].nome + "/n E-mail: " + dados[i].email)

            window.location.href = "sobre.html"
        } 
        //else{
            //alert('Não há esse cadastro!')}
            //não usar desse modo porque ele não é seguro, else não é seguro
            //ele alerta que não tem esse login no dados
              
    }


}

/*
var- globa -- deve evitar seu uso
let - local e pode mudar o estado de seu valor
const - o valor não pode ser mudado

JavaScript ela é dinâmic - variáveis recebem o tipo automaticamene

*/