# Documentação Git - University of Satoshi

Aqui estão os comandos Git que utilizei até agora, juntamente com explicações simples para cada passo.

---

## 1. Clonar o repositório GitHub para a máquina local
git clone https://github.com/nunomcduarte/universityofsatoshi.git

Este comando copia o repositório remoto (GitHub) para o teu computador, criando uma versão local onde podes fazer alterações.

2. Navegar até à pasta do repositório
- cd universityofsatoshi
Este comando muda o diretório atual para a pasta onde o repositório foi clonado, permitindo-te trabalhar no projeto.

3. Adicionar alterações ao stage (preparar para commit)
- git add README.md
Este comando adiciona o ficheiro README.md ao “stage”, preparando-o para ser guardado no commit. Podes usar git add . para adicionar todos os ficheiros modificados.

4. Fazer o commit das alterações
- git commit -m "Atualizei o README.md com o plano de estudos"
O commit salva as tuas alterações no histórico do Git localmente. A mensagem entre aspas (-m) descreve as alterações feitas, para que seja fácil de entender o que mudou.

5. Enviar as alterações para o GitHub
git push origin main

Este comando envia (ou “faz o push”) das tuas alterações para o repositório remoto no GitHub, sincronizando o que fizeste localmente com o repositório na nuvem.


O fluxo correto de Git é:

	1.	Adicionar as alterações com git add, que coloca os ficheiros no “stage” para serem guardados.
	2.	Fazer o commit com git commit, que grava as alterações no histórico do repositório local.
	3.	Enviar as alterações com git push, que envia as alterações para o repositório remoto no GitHub.

# University of Satoshi - Plano de Estudos

Este documento acompanha o progresso do plano de estudos para aprender desenvolvimento relacionado a Bitcoin.

## Semana 1: Consolidação de JavaScript

### 1. Variáveis (`let` e `const`)

- **`let`**: Usamos `let` para declarar variáveis cujo valor pode mudar ao longo do programa.
  - Exemplo: 
    ```javascript
    let idade = 25;
    idade = 26;  // Posso alterar o valor de 'idade'
    ```

- **`const`**: Usamos `const` para declarar variáveis cujo valor **não pode mudar** após serem definidas.

### 2. Loops (`for`)

- Usamos o loop `for` para repetir uma ação.
  - Exemplo:
    ```javascript
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
    ```

### 3. Funções

- Funções são blocos de código reutilizáveis.
  - Exemplo de função:
    ```javascript
    function converterEurosParaSatoshis(euros, valorBitcoin) {
      let satoshis = (euros / valorBitcoin) * 100000000;
      return satoshis;
    }
    ```

### 4. Arrays

- Arrays armazenam vários valores numa única variável.
  - Exemplo:
    ```javascript
    let numeros = [10, 20, 30];
    console.log(numeros[0]);  // Imprime 10
    ```

---

## Semana 2: Introdução ao Bitcoin e criação de carteira

(Ainda por documentar...)

---

## Semana 3: Python e Bitcoin Libraries

(Ainda por documentar...)

---

## Semana X: Projeto final - Criar ATM para conversão de moedas em satoshis

(Ainda por documentar...)