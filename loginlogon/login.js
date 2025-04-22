function banco (){
    const bd1=[
        {id:1, login:"John", senha:"1234"},//0
        {id:2, login:"Rango", senha:"1212"},//1
    ] 
    return bd1

}
function logon (){
    let lg = document.querySelector("#login").value
    let sn = document.querySelector("#senha").value
    const bd2=banco()
    for(let i=0; i<bd2.length;i++)
        if(lg=bd2[i].login&&sn ==bd2[i].senha){

        }
}