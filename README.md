# project_full_stack_nest_and_next

## Pré-requisítos:

- NodeJS >= 18.15.0;
- Docker e Docker Compose;

## Inicialização da aplicação:

- Criar um arquivo .env
  - Preencher o arquivo com as variáveis conforme indicado no env.example
- No diretório project_full_stack_nest_and_next executar o comando:
  - `docker compose up`
- Após o comando docker compose ser finalizado acessar a pasta front-end no caminho:
  - project_full_stack_nest_and_next/front-end
  - Estando na pasta front-end executar os seguintes comandos:
    - `yarn build`
    - `yarn start`
- Agora é só acessar o endereço http://localhost:3000 e fazer o uso da aplicação.