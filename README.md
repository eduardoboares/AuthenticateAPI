
RELATÓRIO DO MÓDULO DE AUTENTICAÇÃO
Segurança da Informação 

Professor: Eduardo Sakaue
Turma: 5º Semestre de Análise e Desenvolvimento de Sistemas
Grupo: Bárbara Nogueira, Bianca de Araujo, Edson de Oliveira, Eduardo Boares e Franklin Carvalheira.

INTRODUÇÃO
A avaliação dos métodos de processos dos fluxos da informação em uma organização é de extrema importância. A disposição de garantir que a confidencialidade, integridade e disponibilidade das informações esteja sempre sobre gerência da mesma, onde esta possui total visão das ocorrências transitória da comunicação e de suas tecnologias. Logo, o aperfeiçoamento delas é adequado e considerável.

OBJETIVO
Este documento possui a finalidade de descrever e apresentar uma solução encontrada por este grupo. Tendo como intuito apresentar o modelo de desenvolvimento de uma API de módulo de autenticação de usuários com integração ao GitHub, Travis-CI e Heroku, possuindo o controle dos ambientes de desenvolvimento e produção. O projeto já encontra-se disponível para acesso no repositório de codigos, GitHub, no seguinte link: https://github.com/EduardoPereiraBoares/AuthenticateAPI

TECNOLOGIAS APLICADAS
Neste projeto foram selecionadas certas tecnologias, onde apresentaram maiores diretrizes para que fosse cumprido o objetivo do projeto. As quais serão descritas a seguir:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
NodeJS
O Node.js é um ambiente de tempo de execução JavaScript de código aberto e de plataforma cruzada. O Node.js executa o mecanismo JavaScript V8, o núcleo do Google Chrome, fora do navegador. Isso permite que o Node.js seja muito eficiente. Ele pode ser usado tanto para Front-End como para Back-End, o que facilita, pois evita ter de aprender uma nova linguagem.

Heroku
O Heroku é uma plataforma em nuvem que permite que as empresas construam, entreguem, monitorem e escalem aplicativos. Basicamente um servidor na nuvem, onde empresas e desenvolvedores podem conectar suas aplicações.

Travis-CI
Travis-CI é uma ferramenta de integração contínua, ou seja, isto se refere a uma série de testes que pode escrever para garantir que os códigos e afins funcionem da maneira esperada através de testes unitários. Toda vez que sobe uma atualização para o Git é feito os testes nos ambientes que era para configurar.
 
MongoDB
O MongoDB é um banco de dados distribuído, embasado em documentos e de propósito geral, desenvolvido para desenvolvedores de aplicativos modernos e para ser utilizado em nuvem. O MongoDB permite a criação de usuários, configurando seus privilégios de acesso, baseado em usuário administrador, usuários com permissões de leitura e gravação de dados e usuários que podem apenas ler os mesmos.

GitHub
Github é um serviço web que oferece diversas funcionalidades extras aplicadas ao git. Quase todos os projetos/frameworks/bibliotecas sobre desenvolvimento open source estão no github, e o usuário pode acompanhá-los através de novas versões, contribuir informando bugs ou até mesmo enviando código e correções. 

ARQUITETURA DA APLICAÇÃO
Esta etapa irá detalhar todo o funcionamento solene do desenvolvimento da API. Foram divididos em categorias e serão descritos os processos e valores integrados ao projeto.

Application Programming Interface (API)
O procedimento desta API baseia-se na autenticação de usuário e definições de permissões de acesso aos EndPoints. Foram integradas etapas de validação de criação de usuário, login de usuário, recuperação de senha (onde é enviado um e-mail) e reset de senha.

Atributos Utilizados
Bcrypt
É um algoritmo de criptografia do tipo Hash para senhas. Onde foi combinado com o Salt (Salted Hashing), que é uma sequência de caracteres, números ou termos adicionados antes da senha, que dão aleatoriedade ao resultado da mesma criptografada, tornando-a mais complexa.

Dotenv
A maioria dos projetos possuem dados sensíveis, como informações do banco de dados, chaves de “API's”, Secret Keys, entre outras informações. Ele serve para adaptar as variáveis ambiente de um projeto, todas as informações sensíveis ficam armazenadas em um arquivo chamado ".env", assim ele fica fora do controle de versão do software como GIT, SVN e outros.

Mongoose
É uma biblioteca do Nodejs que proporciona uma solução baseada em esquemas para modelar os dados da sua aplicação. Possui sistema de conversão de tipos, validação, criação de consultas e hooks para lógica de negócios. Isso significa que o Mongoose traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizados por sua aplicação.
Express
É um framework web rápido, flexível e minimalista para Node.js, está voltado para a criação e obtenção dos dados a partir do seu servidor, independente da linguagem que os irá utilizar. 
Crypto-JS 
O CryptoJS é uma coleção crescente de algoritmos criptográficos padrão e seguros implementados em JavaScript usando as melhores práticas e padrões. Eles são rápidos e possuem uma interface consistente e simples. 

JSON Web Token (JWT)
O método JWT  define uma maneira compacta e independente de transmitir informações com segurança entre as partes como um objeto JSON.

Mailer
O Mailer tem sido usado com Node.js, um ambiente de execução Javascript server-side, isto é, uma maneira de executar código escrito em javascript do lado do servidor. Uma das eventuais tarefas que o Node.js pode executar é o envio de e-mails. Esta função por ser útil para notificar o contato de possíveis clientes, enviar algum conteúdo para as pessoas que solicitarem, para notificar sobre alguma ação dentro da sua aplicação, etc. 

PROBLEMA DE SEGURANÇA NA CONEXÃO COM O BANCO DE DADOS
Normalmente a url de conexão com o banco de dados fica exposta no código da aplicação, ocasionando em um problema de segurança por exibir dados sensíveis e comprometedores nos repositórios e no ambiente de desenvolvimento.
 
SOLUÇÃO
Como solução para o problema descrito, foi utilizado o Dotenv para criação de variáveis de ambiente, as quais ocultam dados sensíveis do código, sendo configuradas de acordo com os ambientes. Deste modo, as variáveis de ambiente que estão no ambiente de produção não estão expostas e nem acessíveis no ambiente de desenvolvimento. Também foi criado o controle e permissões de ambientes com a intenção de gerenciar alterações, testes e atualizações da aplicação. Como segue abaixo:


CONSIDERAÇÕES FINAIS
O desenvolvimento do projeto teve como objetivo geral o desenvolvimento de uma política de segurança de acesso ao banco de dados no intuito de aprimorar este processo da melhor maneira possível. É evidente que certos pontos devem ser analisados e que esta pesquisa colabora com o surgimento de novas adversidades que podem ser analisadas em estudos futuros.

REFERÊNCIAS BIBLIOGRÁFICAS

The database for modern applications. Disponível em: <https://www.mongodb.com/> Acesso em: 06 out 2019.

FERNANDES, Diego. [API NodeJS + Express + Mongo] Estrutura e cadastro. Disponível em: <https://www.youtube.com/watch?v=BN_8bCfVp88&t=443s> Acesso em: 05 out 2019.

FERNANDES, Diego. [API NodeJS + Express + Mongo] Autenticação. Disponível em: <https://www.youtube.com/watch?v=KKTX1l3sZGk> Acesso em: 05 out 2019.

FERNANDES, Diego. [API NodeJS + Express + Mongo] Recuperação de senha com NodeMailer. Disponível em: <https://www.youtube.com/watch?v=Zwdv9RllPqU> Acesso em: 05 out 2019. 

FERNANDES, Diego. [API NdeJS + Express + Mongo] CRUD e relacionamentos com MongoDB. Disponível em: <https://www.youtube.com/watch?v=GAZdUyIV3ms&t=1185s> Acesso em: 05 out 2019. 
