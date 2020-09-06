# API Rest - CRUD


## Descrição
Este projeto contém uma API REST com NodeJs que realiza as funções de CRUD para a tabela 'Desenvolvedores'.


## Tabela de conteúdos
<!--ts-->
   * [Descrição](#descrição)
   * [Features](#features)
   * [Pré-Requesitos](#pré-requisitos)
   * [Testes](#testes)
   * [Autor](#autor)
<!--te-->


## Features
Este potencial CRUD é capaz de realizar:
- [x] Cadastro de desenvolvedor
- [x] Listagem de desenvolvedores com paginação (4 por página)
- [x] Listagem de desenvolvedor por id
- [x] Edição dos campos do cadastro de desenvolvedor
- [x] Exclusão do cadastro de desenvolvedor

A aplicação ainda conta com testes unitários e testes de integração.


## Pré-Requisitos

Instalar o Docker Desktop (https://www.docker.com/products/docker-desktop) ou Docker Toolbox, a depender do seu sistema operacional.

Instalar o NodeJS (no computador ou rodar no container) para executar os testes.
 
Para criar o container a partir da imagem, execute:

    docker build -f application.dockerfile -t beavanzi/dockernode .

Para rodar o container, execute:

    docker run -p 5000:5000 -d --name crud beavanzi/dockernode

`Caso a porta 5000 esteja em uso, mapeie outra em "outra_porta_local:5000"`

Com isso, o container estará rodando, e uma tabela 'desenvolvedores' será criada nos arquivos do container. Você poderá fazer as requisições na API usando Insomnia, Postman, etc.

Para parar a execução do container, execute:

    docker stop crud

Com o container parado, você pode removê-lo usando:

    docker rm crud

## Testes

Os testes unitários e de integração foram escritos utilizando o Jest e o Supertest, e devem ser executados através do comando:

    npm test


## Autor

* **Beatriz Avanzi Ecli**: @beavanzi (https://github.com/beavanzi)
* [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=www.linkedin.com/in/beatriz-a-310079115/)](https://www.linkedin.com/in/beatriz-a-310079115/)

