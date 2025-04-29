//Dcionario de dados
function dados(){
    const ds = [
        {id:1, login:"john", senha:"1234", nome:"John", email:"john@week.com"},
        {id:2, login:"ringo", senha:"2222", nome:"Ringo", email:"ringo@week.com"},
        {id:3, login:"paul", senha:"4444", nome:"Paul", email:"paul@week.com"}
               ] 
    let json = JSON.stringify(ds)
    localStorage.setItem("banco", json)  
    //return ds
            }
function LockManager(){}
    //retorna os dados da função
    //const ds = dados()
    const ds = JSON.parse(localStorage.getItem("banco"))


function logar(){
    const ds = dados()
let lg = document.querySelector("#login").value
let sn = document.querySelector("#pass").value
for(let i=0;i<ds.length;i++){
    if(lg == ds[i].login && sn == ds[i].senha){
            console.log("Seu login é: " + ds[i].login + "\n Seu nome é: " + ds[i].nome)
        alert("Logou!")
        
        sessionStorage.setItem("usuario", ds[i].nome)
        sessionStorage.setItem("email", ds[i].email)
        //redirecionar pagina
        alert(ds)
        window.location.href = "sobre.html"
        document.querySelector ("#usuario").value = "Meu teste"
        break
    }
}
}
function logado(){
    let usuario = sessionStorage.getItem("user")
    document.querySelector("#usuario").value = us
}