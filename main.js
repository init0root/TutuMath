console.log("funcionando...")

var resultado = 0
var pontos = 0
function generateValue(){
    var pergunta = document.getElementById("result")
    var n1 = Math.floor(Math.random() * 15)
    var n2 = Math.floor(Math.random() * 8)
    pergunta.innerText = "Qual o resultado de  " + n1 + "x" + n2 + " ?";
    resultado = n1 * n2
    var botoes = document.getElementsByClassName('btn')
    var random = Math.floor(Math.random() * botoes.length)
    for(var i = 0; i<botoes.length; i++){
        if(i == random){
            botoes[i].innerText = resultado
        }else if(i != random){
            botoes[i].innerText = resultado + Math.floor(Math.random() * 20)
        }
        
    }

}


function enviaresposta(botaoclicado){
    var pts = document.getElementById("pts")
    var btnclicked = botaoclicado.innerText
    var intbtn = parseInt(btnclicked)
    if(intbtn == resultado){
        pontos += 10;
        pts.innerText = "pontos : " + pontos
        alert("Tutu diz : ganhou dez pontos, danado(a) :)")
    }else{
        pontos -= 10;
        pts.innerText = "pontos : " + pontos
        alert("Tutu diz : perdeu dez pontos, otaro(a) :)")
    }
    generateValue()
    

}

generateValue()


