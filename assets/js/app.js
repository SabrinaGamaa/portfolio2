'use strict';

let header = $(`
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
<a class="navbar-brand" href="index.html">Sabrina Gama</a>
<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
   <li class="nav-item"><a class="nav-link" href="projetos.html">Projetos</a></li>
   <li class="nav-item"><a class="nav-link" href="sobreMim.html">Sobre Mim</a></li>
  </ul>
</div>
</nav>`);

$(document).ready(function () {
    $('body').prepend(header);

    emailjs.init('Y69ucV6WXNlHOpCkT');
    let footer = $(`
  <footer class="footer">
    <div class="row text-dark">
      <div class="col-md-6 d-flex mt-5 flex-column justify-content-center">
        <div class="footer-container m-5">
            <div style="padding-bottom: 20px;">
                <img
                    src="assets/img/foto-sabrina.jpg"
                    alt=""
                    class="rounded-circle"
                    height="200"
                    width="200"
                />
            </div>
            <h3>Entre em contato comigo!</h3>
            <p style="text-transform: uppercase;">Quer discutir um projeto ou apenas dizer oi? Minha caixa de entrada está aberta para todos.</p>
            <p>Aberto para oportunidades: <span id="oportunidade">Sim</span></p>
            <div class="social-icons">
                <a href="https://github.com/SabrinaGamaa" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/sabrina-gama/" target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="mailto:sabrinagama0027@gmail.com">
                    <i class="fa-solid fa-envelope"></i>
                </a>
                <a href="https://www.instagram.com/sabrina_gama27" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </div>
        </div>
      </div>
      <div class="col-md-6 d-flex mt-5 flex-column text-center justify-content-center">
        <div class="container p-4">
          <div class="form-style-6">
            <h6 class="display">Entre em contato!</h6>
            <form id="contact-form">
              <input type="text" name="user_name" placeholder="Seu nome" required>
              <input type="email" name="user_email" placeholder="Seu email" required>
              <textarea name="message" placeholder="Sua mensagem" required></textarea>
              <button type="submit">Enviar</button>
            </form>
            <p id="status"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="foot">&copy; 2025 Sabrina Gama. Todos os direitos reservados.</p>
  </footer>
  `);

    $('body').append(footer);

    const form = document.getElementById('contact-form');
    const status = document.getElementById('status');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        emailjs.sendForm('service_jewicbf', 'template_v4edrc4', this).then(
            () => {
                status.innerHTML = '✅ Mensagem enviada com sucesso!';
                form.reset();
            },
            (err) => {
                status.innerHTML = '❌ Erro ao enviar: ' + JSON.stringify(err);
            }
        );
    });
});

$(function () {
    $('#js-hamburger').on('click', function () {
        $(this).toggleClass('is-active');
    });
});
