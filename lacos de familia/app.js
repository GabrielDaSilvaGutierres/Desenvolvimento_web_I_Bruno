function dicionairo(){
    const dados = [ //dicionario de dados
        {id:1, nome: "Gabriel", login:"gabriel", senha:"1234"},
        {id:2, nome: "Lucas", login:"Lucas", senha:"4321"}
                  ]

                  //JSON = texto estruturado
                  let meujson = JSON.stringify(dados)
                  localStorage.setItem("banco", meujson)
}