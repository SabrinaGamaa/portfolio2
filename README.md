# Sabrina Gama — Portfólio

Portfólio pessoal de Sabrina Gama, estudante de Análise e Desenvolvimento de Sistemas na UniSociesc e desenvolvedora em formação com interesse em back-end, APIs e dados.

**Site:** https://sabrinagamaa.github.io/portfolio2/

## Tecnologias

- HTML semântico, CSS responsivo e JavaScript moderno com ES Modules.
- Sem framework, dependências de servidor, banco de dados ou etapa de build.
- GitHub Pages para hospedagem estática.

Os estilos e scripts são locais e os caminhos relativos funcionam no domínio de projeto `/portfolio2/` do GitHub Pages.
Os caminhos legados `projetos.html` e `sobreMim.html` redirecionam para as seções correspondentes da página principal.

## Executar localmente

Na pasta do repositório, inicie um servidor estático:

```powershell
py -m http.server 8000
```

Abra http://localhost:8000/ no navegador. Servir por HTTP é necessário para carregar os módulos JavaScript; abrir `index.html` diretamente pode bloquear esses módulos.

## Publicar no GitHub Pages

1. Envie as alterações para a branch de publicação desejada.
2. No GitHub, abra **Settings → Pages**.
3. Configure a publicação a partir da branch selecionada e da pasta raiz (`/`).
4. Confirme que a URL publicada é https://sabrinagamaa.github.io/portfolio2/.

Não é necessário executar build ou instalar pacotes. A publicação não é feita automaticamente por este repositório local.

## Estrutura principal

```text
index.html                 Página única e conteúdo do portfólio
assets/
  css/                     Tokens, estilos globais, componentes e seções
  documentos/              Currículo PDF
  img/                     Fotografias e capturas reais existentes
  js/                      Idiomas, tema, navegação e interações
```

O PDF do currículo está temporariamente indisponível enquanto preparo uma versão válida. O modal da seção de currículo oferece contato por e-mail, sem vincular um arquivo inválido.

O projeto Scodit é apresentado somente pela demonstração pública, com dados fictícios e informações anonimizadas. Seu código-fonte privado não é vinculado pelo portfólio.
