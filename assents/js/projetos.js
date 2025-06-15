/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Object with tag name as key and their respective image as value
const tagImages = {
    "Java": "assents/img/java.png",
    "Python": "assents/img/pitao.png",
    "SQL": "assents/img/base-de-dados.png",
    "Django": "assents/img/django.png",
    "API": "assents/img/api.png",
}

// Array of object for projects
const projects = [{
    title: "Cadastro Academia",
    cardImage: "assents/img/telaInicial.PNG",
    description: "Demostração de um sistema de Academia",
    tags: ["Java"],
    tagimg: "assents/img/telaInicial.PNG",
    Githublink: "https://github.com/SabrinaGamaa/A3-Academia",
}, {
    title: "Spring Boot JPA",
    cardImage: "assents/img/orders.PNG",
    description: "Uma API RESTful em Java construída com Spring Boot, utilizando JPA / Hibernate como solução de persistência.",
    tags: ["Java", "API"],
    tagimg: "assents/img/orders.PNG",
    Githublink: "https://github.com/SabrinaGamaa/SpringBoot-JPA",
}, {
    title: "Notificação de Terremoto na Asia",
    cardImage: "https://github.com/SabrinaGamaa/API-alert/raw/master/imagens/telegram.jpeg",
    description: "Monitoram e alertam sobre terremotos detectados, enviando notificações tanto por Telegram quanto via SMS.",
    tags: ["Python", "API"],
    tagimg: "assents/img/orders.PNG",
    Githublink: "https://github.com/SabrinaGamaa/API-alert",
}, {
    title: "Trading Bot com WebSocket - Deriv",
    cardImage: "assents/img/api-deriv1.png",
    description: "Analisa e realizar apostas automaticamente no mercado R_100. Com este bot, você pode acompanhar o saldo da conta e executar operações com base em condições específicas do mercado",
    tags: ["Python", "API"],
    tagimg: "assents/img/orders.PNG",
    Githublink: "https://github.com/SabrinaGamaa/API-deriv",
}, {
    title: "Buscador de CEP e Endereço",
    cardImage: "https://github.com/SabrinaGamaa/Cep/raw/main/encontrar_endereco.png",
    description: "Ao buscar um endereço (com UF, cidade e logradouro), o programa retorna uma lista de CEPs encontrados que correspondem ao endereço informado",
    tags: ["Python", "API"],
    tagimg: "assents/img/orders.PNG",
    Githublink: "https://github.com/SabrinaGamaa/Cep",
}];

// function for rendering project cards data
const showCards = () => {
    let output = "";
    projects.forEach( ({title, cardImage, description, tags, Githublink}) => {
        (output += `       
        <div class="column skill-card card">
            <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
                <div class="data">
                    <div class="content">
                        <div class="title-div">
                            <h1 class="title"><a href="${Githublink}" target="_blank">${title}</a></h1>
                        </div>                        
                        <div class="description-div">
                            <p>${description}</p>
                        </div>

                        <div class="searchdiv" style="margin-top:10px;">
                        ${tags.map(tag => (`<button class="tagbutton">
                            <img class="tagbutton tagimg" src=${tagImages[tag]} alt="" />
                                <span>${tag}</span>                              
                            </button>`)).join("")}
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
        }
    );
    projectcards.innerHTML = output;
}
;
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
    // Declare variables
    var input, button, i, skillcard, card, title;
    input = document.getElementById("myInput").value;
    input = input.toUpperCase();
    skillcard = document.getElementsByClassName("skill-card");
    card = document.getElementsByClassName("card");
    button = document.getElementsByClassName("tagbutton");
    title = document.getElementsByClassName("title");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < button.length; i++) {
        if (button[i].innerHTML.toUpperCase().includes(input) || title[i].innerHTML.toUpperCase().includes(input)) {
            skillcard[i].style.display = "";
            card[i].style.display = "";
        } else {
            skillcard[i].style.display = "none";
            card[i].style.display = "none";
        }
    }
}
