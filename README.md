# Teste técnico - PontoGO nov/2022

O presente projeto corresponde ao teste técnico para a empresa PontoGO e para o desenvolvimento do teste foi utilizado :

1. ReactJS
2. Styled-Components
3. react-router-dom
4. react-icons
5. react-toastify
6. react-input-mask

## Solicitação do teste para ser considerado completo:

Criar uma nova empresa através da API (Register New Company)

Criar um novo colaborador para a respectiva empresa através da API (Register New Employees)

Bater um ponto no horário de 15:00 no dia 26/10/2022 para o respectivo colaborador (Add Point)
Pegar os pontos batidos do dia 26/10/2022 (Get Points of a Day)

Todos os processos devem ser apresentados em uma aplicação front-end com React, como exemplo:

-Formulário de cadastro da empresa consumindo a API.
-Formulário de cadastro do colaborador consumindo a API.
-Botão para efetuar o ponto deste colaborador em específico (Não sendo obrigatóriamente necessário pegar a lista de colaboradores dessa empresa).
-Mostrar os pontos batidos deste colaborador em específico em uma lista.

## Conceitos utilizados:

-Componentes.
-Utilização de rotas.
-Custom hooks.
-ContextAPI.
-Consumindo API com Fetch.
-Estilização com Styled-Components.
-Entre outros conceitos.

## Script para rodar o projeto em ambiente de desenvolvimento:

### `npm start`

Obs: Projeto criado com create-react-app

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo em seu navegador.

A página será recarregada quando você fizer alterações.

## ATENÇÃO!!!:

### `MENSAGEM que aparece no CONSOLE ao abrir Modal para adicionar Empresa ou Modal para adicionar o Colaborador`

Mensagem no console:
findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of InputElement which is inside StrictMode.

Motivo:
Após instalação da biblioteca "react-input-mask" para facilitar a ultilização de máscara nos inputs, o findDOMNode
está obsoleto no modo React.StrictMode que está em src/index.js.

Esse erro vem da biblioteca "react-input-mask", no entanto, não compromete a utilização e avaliação do teste.

### `Deploy`

Aplicação feito deploy no Netlify:

https://rodrigo-ponto.netlify.app/

Enjoy!
