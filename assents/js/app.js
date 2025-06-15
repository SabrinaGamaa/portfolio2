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
   <li class="nav-item"><a class="nav-link" href="contacte.html">Contacte-me</a></li>
  </ul>
</div>
</nav>`);

let footer = $(`
<footer class="footer">
  <div class="container p-4">
    <div class="row justify-content-center">
        <div class="col-12 col-md-4">
            <div class="form-style-6">
                <h6 class="display">Entre em contato!</h6>
                <form>
                <input type="text" name="field1" placeholder="Seu nome" />
                <input type="email" name="field2" placeholder="Email" />
                <textarea name="field3" placeholder="Escreva sua Mensagem"></textarea>
                <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>


      </div>
    </div>
  </div>
</footer>
`);




$(function () {
    let bodyElement = $(`body`);
    bodyElement.prepend(header);
    bodyElement.append(footer);
  
    const menuBtn = document.querySelector('.navbar-toggler');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
      if(!menuOpen){
        menuBtn.classList.add('open')
        menuOpen = true;
      }
      else{
        menuBtn.classList.remove('open');
        menuOpen = false;
      }
  });

});

$(function(){
  
  $("#js-hamburger").on("click", function(){
    $(this).toggleClass('is-active');
  });

});