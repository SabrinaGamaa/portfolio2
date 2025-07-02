/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Object with tag name as key and their respective image as value
const tagImages = {
    "Java": "assets/img/java.png",
    "Python": "assets/img/pitao.png",
    "SQL": "assets/img/base-de-dados.png",
    "Django": "assets/img/django.png",
    "API": "assets/img/api.png",
}

// Array of object for projects
const projects = [{
    title: "Blog com Django",
    cardImage: "assets/img/home2.png",
    description: "Aplicação web com Django focada em mensagens privadas entre usuários, usando criptografia com Fernet e interações dinâmicas com HTMX.",
    tags: ["Python"],
    tagimg: "assets/img/home2.png",
    Githublink: "https://github.com/SabrinaGamaa/EstudosDjango",
}, {
    title: "Cadastro Academia",
    cardImage: "assets/img/telaInicial.PNG",
    description: "Demostração de um sistema de Academia",
    tags: ["Java"],
    tagimg: "assets/img/telaInicial.PNG",
    Githublink: "https://github.com/SabrinaGamaa/A3-Academia",
}, {
    title: "Spring Boot JPA",
    cardImage: "assets/img/orders.PNG",
    description: "Uma API RESTful em Java construída com Spring Boot, utilizando JPA / Hibernate como solução de persistência.",
    tags: ["Java", "API"],
    tagimg: "assets/img/orders.PNG",
    Githublink: "https://github.com/SabrinaGamaa/SpringBoot-JPA",
}, {
    title: "Notificação de Terremoto na Asia",
    cardImage: "https://github.com/SabrinaGamaa/API-alert/raw/master/imagens/telegram.jpeg",
    description: "Monitoram e alertam sobre terremotos detectados, enviando notificações tanto por Telegram quanto via SMS.",
    tags: ["Python", "API"],
    tagimg: "assets/img/orders.PNG",
    Githublink: "https://github.com/SabrinaGamaa/API-alert",
}, {
    title: "Trading Bot com WebSocket - Deriv",
    cardImage: "assets/img/api-deriv1.png",
    description: "Analisa e realizar apostas automaticamente no mercado R_100. Com este bot, você pode acompanhar o saldo da conta e executar operações com base em condições específicas do mercado",
    tags: ["Python", "API"],
    tagimg: "assets/img/orders.PNG",
    Githublink: "https://github.com/SabrinaGamaa/API-deriv",
}, {
    title: "Buscador de CEP e Endereço",
    cardImage: "https://github.com/SabrinaGamaa/Cep/raw/main/encontrar_endereco.png",
    description: "Ao buscar um endereço (com UF, cidade e logradouro), o programa retorna uma lista de CEPs encontrados que correspondem ao endereço informado",
    tags: ["Python", "API"],
    tagimg: "assets/img/orders.PNG",
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
    const input = document.getElementById("myInput").value.toUpperCase();
    const cards = document.getElementsByClassName("skill-card");

    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].querySelector(".title").innerText.toUpperCase();
        const tags = cards[i].querySelectorAll(".tagbutton span");

        let tagsText = "";
        tags.forEach(tag => tagsText += tag.innerText.toUpperCase() + " ");

        if (title.includes(input) || tagsText.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
