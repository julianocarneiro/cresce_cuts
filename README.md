# Desafio Cresce_cuts

### Clone o repositório e execute o projeto

```bash
git clone https://github.com/julianocarneiro/cresce_cuts.git
```
Entre na pasta do projeto:
```bash
cd cresce_cuts
```

Execute o projeto da seguinte forma:
```bash
# instala as dependencias do projeto
npm install

# inicia o projeto
npm start
```
Abra [http://localhost:3000](http://localhost:3000) em seu navegador e veja o resultado.

### Features

* App Criado em Next 14
* Typescript no projeto
* Componentização
  * Exemplo de Composition no Card
  * Stilização usando CSS-in-JS nos Componentes de For
    * InputDate, InputGroup, InputSelect, InputText
  * Alguns componentes usando CSS Clássico como Button, Menu e outros
* Services
  * Context API
  * Consumo de API com Axios, usando interceptors para tratar erros
  * Storage de dados no LocalStorage

- [x] Listagem de Produtos: Exibir produtos disponíveis para desconto, incluindo imagens, preços e descrições.

- [ ] Criação de Descontos: Interface para gerenciamento de descontos a produtos específicos, definindo o desconto como: de/por ou leve + page.

- [ ] Visualização de Campanhas: Permite visualizar e editar campanhas de desconto criadas, mostrando o preço original e o preço com desconto.

- [ ] Persistência de Dados: As campanhas de desconto devem ser salvas localmente para persistir entre as sessões do navegador ou dispositivo.



### Tecnologias utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
  