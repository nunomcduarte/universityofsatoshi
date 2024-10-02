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


