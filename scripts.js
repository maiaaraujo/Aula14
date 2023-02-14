//document.write("<h1>Olá mundo</h1>");
//document.write("<p>nosso parágrafo<p/>")
//document.write('<button class="btn btn-primary">meu botão</button>');

//alert ("Oi sumida");

//let resposta = prompt();

//if(resposta == "oi"){
//    alert("Eita como ela tá fria...")
//}

//alert("ta tudo bem?");

//let resposta2 = prompt();

//if (resposta2 == "tudo"){
    //alert("ta muito ocupada né?");
//}

//else{
   // alert("ta fazendo o que")
   // let resposta3 = prompt();
    //if(resposta3 == "nada"){
      // alert("bora sair");
      // let resposta4 = prompt();
        //if(resposta4 == "bora"){
          //  alert("pra onde?")
       // }
    //}
//}


//localStorage.setItem("senha", "12345")

let conversas = document.querySelector(".conversas");
let botao = document.querySelector(".btn");
let resposta =document.querySelector("#respostas")

conversas.innerHTML = "<div>Olá seja bem-vindo, em que posso lhe ajudar</div>";

setTimeout (() => {
conversas.innerHTML += "<div>1. Financeiro<br>2. Acadêmico<br>3. Comercial</div>"
}, 2000);

botao.addEventListener("click", () => {
    switch(resposta.value){
        case "1":
            conversas.innerHTML += "<div>Entendi, você escolheu financeiro</div>";
        break;
        case "2":
            conversas.innerHTML += "<div>Entendi, você escolheu Acadêmico</div>";
        break;    
        case "3":
            conversas.innerHTML += "<div>Entendi, você escolheu Comercial</div>";
        break;        
    }
}

)