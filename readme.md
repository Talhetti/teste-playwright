# Teste Automatizado - SauceDemo com Playwright

Este projeto executa um teste automatizado no site [saucedemo.com](https://www.saucedemo.com) utilizando **Playwright com JavaScript**, simulando o seguinte fluxo:

1. Acesso ao site
2. Login com usuário válido
3. Inserção de 3 itens no carrinho (acessando a página de cada produto)
4. Visualização do carrinho
5. Geração de evidências visuais (prints)

---

## Requisitos

- Node.js (v16 ou superior)
- Terminal (PowerShell, CMD ou terminal do VSCode)

---

## Instalação do Projeto

bash
## Clonar o repositório ou criar pasta local
mkdir saucedemo-tests
cd saucedemo-tests

## Iniciar o projeto Node.js
npm init -y

## Instalar Playwright e dependências de teste
npm install -D playwright @playwright/test

## Instalar os navegadores (Chromium, Firefox e WebKit)
npx playwright install

## Executar o teste
npx playwright test tests/saucedemo.spec.js

## Para rodar com navegador visível (modo interativo):
npx playwright test tests/saucedemo.spec.js --headed

