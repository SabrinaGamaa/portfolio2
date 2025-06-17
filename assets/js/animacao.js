// Animação Lottie Externa
document.addEventListener('DOMContentLoaded', function () {
    lottie.loadAnimation({
        container: document.getElementById('animacao-computador'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/img/computador.json', // Caminho do arquivo JSON da animação
    });
});

// Animação Lottie Externa
document.addEventListener('DOMContentLoaded', function () {
    lottie.loadAnimation({
        container: document.getElementById('animacao-projetos'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/img/projetos.json', // Caminho do arquivo JSON da animação
    });
});

window.addEventListener('scroll', function () {
    const colunaEsquerda = document.querySelector('.coluna-esquerda');
    const colunaDireita = document.querySelector('.coluna-direita');

    const windowHeight = window.innerHeight;
    const colunaPosition = document
        .querySelector('.skills-main-div')
        .getBoundingClientRect().top;

    if (colunaPosition < windowHeight - 100) {
        // Quando estiver 100px antes de entrar na tela
        colunaEsquerda.classList.add('mostra');
        colunaDireita.classList.add('mostra');
    } else {
        colunaEsquerda.classList.remove('mostra');
        colunaDireita.classList.remove('mostra');
    }
});

window.addEventListener('scroll', function () {
    const colunaEsquerda = document.querySelector('.educacao');

    const windowHeight = window.innerHeight;
    const colunaPosition = document
        .querySelector('.educacao-sec')
        .getBoundingClientRect().top;

    if (colunaPosition < windowHeight - 100) {
        colunaEsquerda.classList.add('mostra');
    } else {
        colunaEsquerda.classList.remove('mostra');
    }
});

const allElements = document.querySelectorAll('.animated-text');

// It checks if there is at least one element
if (allElements.length > 0) {
    //It runs the script for each found element
    allElements.forEach((element) => {
        const txtElement = element,
            wordsList = txtElement.getAttribute('data-words'),
            words = wordsList.split(', ');

        let wordsCount = 0;

        entry();

        // Initial function
        function entry() {
            if (wordsCount < words.length) {
                // It runs the code for each word
                let word = words[wordsCount],
                    txtArr = word.split(''), // It makes an array of letters in the word
                    count = 0;

                txtElement.textContent = ''; // It removes the previous text from the element

                // For each letter in the array
                txtArr.forEach((letter) => {
                    // It replaces the empty space for the "non-break-space" HTML...
                    // ... This is needed to separate the words properly
                    let _letter = letter === ' ' ? '&nbsp;' : letter;

                    // It wraps every letter with a "span" and puts all they back to the element
                    txtElement.innerHTML += `<span>${_letter}</span>`;
                });

                let spans = txtElement.childNodes;

                // It sets the interval between each letter showing
                const letterInterval = setInterval(activeLetter, 70);

                function activeLetter() {
                    spans[count].classList.add('active');
                    count++;

                    if (count === spans.length) {
                        clearInterval(letterInterval);

                        // It waits 4 seconds to start erasing the word
                        setTimeout(() => {
                            eraseText();
                        }, 600);
                    }
                }

                function eraseText() {
                    // It sets the interval between each letter hiding
                    let removeInterval = setInterval(removeLetter, 40);
                    count--;

                    function removeLetter() {
                        spans[count].classList.remove('active');
                        count--;

                        if (count === -1) {
                            clearInterval(removeInterval);
                            wordsCount++;

                            // After removing the last letter, call the initial function again
                            entry();
                        }
                    }
                }
            } else {
                // If the code reaches the last word
                // It resets the words counter...
                wordsCount = 0;
                // ...and calls the initial function again.
                entry();
            }
        }
    });
}

const phrases = ['“Talk is cheap. Show me the code., — Linus Torvalds”'];

const typingElement = document.querySelector('.typing-text');
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let currentPhrase = '';
let currentLetters = '';

function typeEffect() {
    currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        currentLetters = currentPhrase.substring(0, letterIndex--);
    } else {
        currentLetters = currentPhrase.substring(0, letterIndex++);
    }

    typingElement.innerHTML = currentLetters.replace(/,/g, '<br>');

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && letterIndex === currentPhrase.length) {
        typingSpeed = 2000; // Pausa no final da frase
        isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
});

const greeting = {
    resumeLink:
        'https://drive.google.com/file/d/1dGypP90h-VrXlxkZ4L7RvXqfQBYW2RUs/view?usp=sharing', // Link do currículo (PDF, Google Drive, etc.)
    displayGreeting: true, // Mostra ou esconde essa seção
};
if (greeting.displayGreeting) {
    const curriculoLink = document.querySelector('.curriculo');
    curriculoLink.href = greeting.resumeLink;
}

const certi = {
    resumeLink:
        'https://drive.google.com/file/d/1dGypP90h-VrXlxkZ4L7RvXqfQBYW2RUs/view?usp=sharing', // Link do currículo (PDF, Google Drive, etc.)
    displayGreeting: true, // Mostra ou esconde essa seção
};
if (certi.displayGreeting) {
    const curriculoLink = document.querySelector('.certificado');
    curriculoLink.href = greeting.resumeLink;
}
