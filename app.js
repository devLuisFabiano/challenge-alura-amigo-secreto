//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let names = [];

function addNames(){
    const input = document.querySelector("input");
    let value = input.value;

    const result = document.querySelector(".result-list");
    result.innerHTML = "";

    if(value == ""){
        alert("Por favor, insira um nome.");
    }else{
        names.push(value);
        input.value = "";
        showNames();
    }
}

function showNames(){
    const list = document.querySelector(".name-list");
    list.innerHTML = "";

    for(let i = 0; i < names.length; i++){
        const li = document.createElement("li");
        li.textContent = names[i];
        list.appendChild(li);
        
    }
}

function sortearAmigo(){
    const result = document.querySelector(".result-list");
    if(names.length != 0){
        let index = parseInt(Math.random() * names.length);
        let name = names[index];

        result.innerHTML = `O amigo secreto sorteado é: ${name} `;

        names = [];
        showNames();

    }
}