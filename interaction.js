let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]

let cardContainer = document.getElementById("itens_section");

ITENS_LOJA.forEach(function(item) {
    let card = document.createElement("div");
    card.className = "card";

    let nomeElement = document.createElement("h3");
    nomeElement.textContent = item.nome;

    let precoElement = document.createElement("p");
    precoElement.textContent = "Preço: R$" + item.preco.toFixed(2);

    let imgElement = document.createElement("img");
    imgElement.src = item.url_img;
    imgElement.alt = item.nome;

    let descricaoElement = document.createElement("p");
    descricaoElement.textContent = item.descricao;
    
    card.appendChild(imgElement);
    card.appendChild(nomeElement);
    card.appendChild(precoElement);
    card.appendChild(descricaoElement);

    
    cardContainer.appendChild(card);
});