const carro = document.getElementById("carro");
const obstaculo = document.getElementById("obstaculo");

function pular() {
    if (carro.classList != "pula"){

        carro.classList.add("pula");

        setTimeout(function (){
            carro.classList.remove("pula");
        }, 400);
    }

    
}

document.addEventListener("click", function(event){
    pular();
});


let espaco = setInterval(function() {

    let carroTop = parseInt (window.getComputedStyle(carro).getPropertyValue ("top"));

    let obstaculoEsquerda = parseInt (
        window.getComputedStyle(obstaculo).getPropertyValue("left")
    );
if (obstaculoEsquerda < 60 && obstaculoEsquerda > 0 && carroTop >= 100) {
    alert("Fim de jogo!");
    document.location.reload(true);
}

}, 10);