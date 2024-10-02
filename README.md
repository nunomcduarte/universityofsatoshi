# University of Satoshi

Este repositório documenta a minha jornada para aprender a desenvolver em Bitcoin, o objetivo final desta jornada de aprendizagem é construir uma carteira de bitcoin que suporte transações On-Chain e via Lightning, juntamente com um ATM para converter Euros em Bitcoin utilizando a rede Lightning.

## Plano de Estudos

### Semana 1: Consolidação de JavaScript
**Objetivo:** Reforçar o conhecimento de JavaScript.
- Revisão de variáveis, loops, condicionais, funções e objetos.
- Introdução a promessas e async/await.

**Projeto:** Criar uma aplicação que calcula um valor hipotético em satoshis baseado numa quantia inserida.

### Semana 2: Introdução ao Bitcoin e Criação de Carteira
**Objetivo:** Compreender os conceitos fundamentais do Bitcoin.
- Estudo de blockchain, UTXO, endereços e transações de Bitcoin.
- Utilização de bibliotecas como `bitcoinjs-lib` para criar uma carteira Bitcoin.

**Projeto:** Criar uma carteira Bitcoin básica que gere endereços públicos e privados.

### Semana 3: Python e Bitcoin Libraries
**Objetivo:** Aprender Python e introduzir bibliotecas relacionadas ao Bitcoin.
- Revisão da sintaxe básica de Python.
- Introdução ao uso de bibliotecas como `bitcoinlib`.

**Projeto:** Criar uma transação simples em Bitcoin com Python.

### Semana 4: APIs e Bitcoin
**Objetivo:** Interagir com a blockchain e serviços externos via APIs.
- Conceitos de APIs REST e chamadas a nodos Bitcoin.
- Utilização de APIs como BTCPayServer.

**Projeto:** Criar uma aplicação que faz chamadas a uma API e exibe o saldo de uma carteira Bitcoin.

### Semana 5: Criar QR Codes para Transações Lightning
**Objetivo:** Geração de QR Codes para pagamentos na Lightning Network.
- Estudo dos conceitos da Lightning Network.
- Geração de QR Codes com bibliotecas como `lnurl`.

**Projeto:** Criar um QR Code que representa uma fatura Lightning Network.

### Semana 6: Integração da Lightning Wallet com a Carteira Bitcoin
**Objetivo:** Integrar a Lightning Wallet com a carteira Bitcoin criada.
- Aprender a enviar e receber pagamentos via Lightning.
- Configuração de um node Lightning.

**Projeto:** Validar pagamentos Lightning e enviar o valor para a carteira Bitcoin.

### Semana 7: Interação com Hardware (Começar a Parte Física)
**Objetivo:** Integrar o software com hardware (ex.: Raspberry Pi).
- Explorar a integração com hardware para reconhecimento de moedas.
- Criar um sistema que converte moedas para satoshis.

**Projeto:** Criar um sistema que reconhece moedas e converte para satoshis.

### Semana 8: Integração do Reconhecimento de Moedas e Geração de QR Codes
**Objetivo:** Ligar o reconhecimento de moedas com a geração de QR Codes.
- Conectar a contagem de moedas à geração de um QR Code com o valor correspondente.

**Projeto:** Criar uma aplicação que reconhece moedas, gera um QR Code, e permite o pagamento via Lightning Network.

### Semana 9: Finalização e Testes
**Objetivo:** Integrar todas as partes e realizar testes finais.
- Ligar todos os componentes do projeto (hardware e software).
- Testar o processo completo de conversão de moedas em satoshis.

**Projeto Final:** Criar a máquina que converte moedas físicas em satoshis usando a rede Lightning Network.
