# Sorreal Clicker

<img src="img/sorrealv1.png" width="160" />

**Sorreal Clicker** é um jogo estilo "clicker", onde o jogador clica em um cookie (chamado de *Sorreais*) para coletar pontos, compra upgrades e auto-clickers para aumentar a produção de pontos automaticamente. Os dados são salvos no `localStorage`, permitindo que o progresso seja mantido mesmo após recarregar a página.

- __Link para acesso:__ https://icrowleyshr.github.io/SorrealClicker/
## Funcionalidades

- **Clique no Cookie**: Clique no cookie para coletar Sorreais (pontos).
- **Upgrades**: Compre upgrades que dobram o valor de pontos por clique.
- **Auto-Clickers**: Compre auto-clickers que clicam automaticamente no cookie, gerando pontos passivamente.
- **Armazenamento Local**: O progresso do jogador (número de cookies, upgrades e auto-clickers) é salvo no `localStorage`.
- **Reset do Jogo**: Possibilidade de resetar o jogo e começar de novo.

## Requisitos

- Navegador moderno com suporte a `localStorage` (Chrome, Firefox, Safari, etc.).
- Conexão com a internet para carregar a biblioteca SweetAlert2.

## Como Jogar

1. **Clique no cookie**: A cada clique, você ganha Sorreais.
2. **Compre upgrades**: Use seus Sorreais para comprar upgrades que aumentam o valor por clique.
3. **Compre auto-clickers**: Use Sorreais para comprar auto-clickers, que vão gerar pontos automaticamente a cada segundo.
4. **Resetar o Jogo**: Caso deseje recomeçar, clique no botão de reset.

## Instalação

1. Clone este repositório:

    git clone https://github.com/iCrowleySHR/SorrealClicker.git

2. Navegue até o diretório do projeto:

    cd sorreal-clicker

3. Abra o arquivo `index.html` em seu navegador.

## Funcionalidades de Código

- **Clique no Cookie**: O jogador clica no cookie, aumentando os Sorreais.
- **Upgrades e Auto-Clickers**: Compre upgrades e auto-clickers, que aumentam a produção de Sorreais.
- **Notificações**: As interações são notificadas através de SweetAlert2, com animações customizadas.
- **Armazenamento Local**: Todos os dados do jogo são armazenados no `localStorage` do navegador, garantindo que o progresso seja mantido.

Desenvolvido por Gustavo Gualda e João Paulo
