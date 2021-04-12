# Quadro Kanban Amo Promo 2021

Este repositorio contém uma aplicação feita com um front-end em Reactjs
que chama uma API Rest feita com Django e que usa PostgreSQL como banco de dados.
 
## Usando o codigo

Pre-requisitos:
- [Docker community edition](https://docs.docker.com/install/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Docker Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [Remote - Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

De um git clone no repositorio e abra o mesmo no visual code:
```
git clone https://github.com/leoavfag/teste-amopromo-kanban.git
cd teste-amopromo-kanban
code .
```

Clique em "Reopen in Container" em um popup que aparece na parte direita inferior. Após ele carregar, o projeto estara rodando em um container, junto com o banco de dados postgreSQL!

Para iniciar o front-end, abra um novo terminal no VScode usando ``` Ctrl-Shift-`  ``` e rode:
```
cd frontend
npm install
npm start
```

Para rodar o back-end em django, abra um novo terminal no VScode usando ``` Ctrl-Shift-`  ``` e rode:
```
python manage.py migrate
python manage.py runserver
```

Pronto! Agora o projeto esta rodando, agora é só usar :)).