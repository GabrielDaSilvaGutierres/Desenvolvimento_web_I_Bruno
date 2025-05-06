function banco(){
    //função bancos
    //1° método
    let dados = [
        //esse metodo consome muito, é melhor o segundo
        {id:1, nome:"Paul", login:"paul", senha:1234, email:"paul@gmail.com",},
        {id:2, nome:"Rango", login:"rango", senha:1244, email:"rango@gmail.com",},
        {id:3, nome:"john", login:"john", senha:1334, email:"john@gmail.com",}
       ]

        //2° método
        //mais rapido e leve
        let json = JSON.stringify(dados)

        localStorage.setItem("banco", json)
        //ele passa os dados banco para a json 
        //depois para storage
        //procura item
        //ele salva localmente os dados do login
       
        //return dados
       //retorna pro dados mas tambêm tem acesso a eles
}

//função de login
function login(){
    let mybd = JSON.parse(localStorage.getItem("banco"))
    //manipula os dados
    //ele vai pegar os dados do banco para o app.js

    
    let lg = document.querySelector("#login").value
    let sn = document.querySelector("#senha").value
    //procuro dos documentos do login e senha

    for(let i=0;i<mybd.lenght;i++){
        if(lg == mybd[i].login && sn == mydb[i].senha )
            alert("Encontrou!")
        //encontrou o login e a senha
    }

}