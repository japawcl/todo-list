Nome do Projeto: Todo List
Autor: Guilherme Wanderley Couto Lima
Data: 13/08/2024
Versão: 1.0
Features utilizadas: React, Node, Prisma, Docker e AntD

No front separei a página em 3 partes deixando elas em pastas diferentes no front\src\components separando por Header, ItemForm (aba de criar uma Todo nova) e ListItem (mostrar as Todos).

No front\src\pages\TodoList\index.tsx fiz o código para a barra de pesquisa mostrar as Todos pelos títulos e organizei/estilizei os componentes citados anteriormente.

E no front\src\providers\useTodo.tsx fiz toda a parte lógica em apenas um provider para apenas chamar a função e não acabar poluindo os códigos anteriores.

Já no back-end gerei um documento utilizando Prisma e fui fazendo as alterações necessárias para se encaixar no meu código.

No todo-list-api\src\controllers\todos.controller.ts fiz todo o controle para existir as funções necessárias para cada ação que fosse ter no site.

No todo-list-api\src\routes\todos.route.ts criei todas as rotas que seriam necessárias no site.

E no todo-list-api\src\services\todos.service.ts chamei as funções criadas no todos.controlle.ts e fui apenas parametrizando as funções.
