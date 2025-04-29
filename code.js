function dados(){
    const ds = [
                {id:1, nome:"Ringo", login:"ringo", password:"1234", email:"ringo@Ig.com"},
                {id:2, nome:"Paul", login:"paul", password:"4321", email:"paul@ig.com"},
                {id:3, nome:"John", login:"john", password:"4423", email:"john@ig.com"}
               ]
    let json = JSON.stringify(ds) //passar para o formato do JSON (JavaScript Object Notation)
    localStorage.setItem("banco", json) //base de dados local no navegador

}
function cadastrar (){

    const banco = JSON.parse(localStorage.getItem("banco"))
    let n = document.querySelector("Nome").value
    let g = document.querySelector("Login").value
    let sn = document.querySelector("pass").value
    let m = document.querySelector("email").value
    
    let usuario = {id:Date.now(),nome:n, login:g, password:sn, email:m}

    banco.push(usuario)

    let json = JSON.stringify(banco)

    localStorage.setItem("banco", json)

    //print(usuario)
    //const vetor = [usuario]

    //const vetor = [usuario]

    //console.log(vetor)
}
function dados2(){
//terminar daqui a pouco
}