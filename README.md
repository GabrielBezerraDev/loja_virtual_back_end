# Desafio Best Minds
<p>
  Este projeto destina-se ao processo seletivo Best Minds 2024, que envolve a construção de um CRUD para um e-commerce, uma loja de esportes denominada Nunes Esporte.
</p>

# O que utilizei para este projeto?
No processo seletivo, tive a liberdade de escolher as tecnologias que considerasse mais adequadas, e optei por utilizar ferramentas com as quais já estava familiarizado. Para o desenvolvimento do back-end, escolhi o Nest.js, uma estrutura robusta e eficiente. Além disso, empreguei outras tecnologias conforme as necessidades do projeto, como o Angular para o front-end, Docker para automatização e padronização do ambiente do back-end, uma imagem Docker MySQL para a persistência de dados e scripts shell para facilitar a inicialização do projeto.

O desenvolvimento do projeto levou aproximadamente um mês, durante o qual busquei atender de forma completa aos requisitos propostos no desafio. Embora reconheça que sempre há espaço para melhorias, estou confiante de que o projeto atendeu de maneira muito satisfatória às expectativas, cumprindo os critérios estabelecidos. 

# Pré-requisitos para mexer no projeto
É necessário seguir alguns passos antes de tentar mexer no sistema:
1. O projeto foi projetado para operar em um ambiente Linux. Se você estiver utilizando um sistema Windows, é altamente recomendável optar pelo WSL (Windows Subsystem for Linux) para garantir a compatibilidade.

2. Certifique-se de que o Node.js esteja instalado em sua máquina, pois é um requisito essencial para o funcionamento do projeto.

3. O usuário responsável por executar o sistema deve garantir que o Docker e o Docker-compose estejam devidamente instalados em sua máquina.

4. O usuário deve dá permissão de **Super user** no seu sistema para rodar o scripts shell com docker sem problema. Sugiro duas alternativas:

   - a) Criar uma instância do seu terminal e dá acesso de privilégios de usuário com o comando `sudo -i`.

   - b) Dá privilégios de super user para o **Docker**.


> [!WARNING]
> Se você escolher a opção **a**, terá que fazer isso toda vez que quiser rodar o script ./start.sh. É um pouco mais trabalhoso porque não vai acontecer automaticamente; você vai ter que fazer manualmente em cada execução do script.

# Rondando o sistema
Após instalar todas depêndencias do projeto, agora segue os passos para rodá-lo:
1. Clone o projeto com o comando `git clone https://github.com/GabrielBezerraDev/loja_virtual_back_end.git`.
   
2. Utilize o comando `npm install` para instalar as dependências do node_modules.

3. Abra o terminal no diretório relativo do projeto que contém [os scripts shell para a execução do sistema](./shell).

4. No terminal, dentro da pasta dos scripts, execute o comando ` chmod u+x start.sh` para conceder permissões de execução ao script, tornando-o compatível com o bash ou qualquer outro interpretador que esteja utilizando.

5. Execute `docker-compose up` para realizar a construção das imagens necessárias para o sistema.

6. Após a conclusão do build das imagens e os containers no ar, execute `./start.sh` no seu terminal.

7. Em determinado momento, irá aparecer está pergunta no terminal `Are you sure you want to reset your database? All data will be lost.`. Você digita "y" no seu teclado, pois o ORM prisma irá resetar as migrações do banco de dados para os dados originais dos scrips sql. 

> [!WARNING]
> Se o terminal acusar um erro relacionado ao **nest**, instale o nestjs pelo npm, com o comando no terminal `npm i @nestjs/core`.

# Como interromper o Back-end?
Caso deseje encerrar a execução do back-end, basta utilizar o comando `docker-compose down`. Este comando é suficiente para interromper completamente o sistema. Se houver a necessidade de reiniciar o sistema posteriormente, utilize simplesmente o script [./start](./shell), conforme mencionado no tópico anterior. Este procedimento proporciona uma maneira direta e eficaz de gerenciar o ciclo de vida do back-end, permitindo uma parada e reinício sem complicações.

> [!WARNING]
> Se você apagar as imagens relacionadas ao docker-compose deste sistema, para roda-lo novamente será necessário prosseguir do passo **4** do tópico **"Rodando o sitema"**.

# Sobre as imagens Docker
Este projeto contém 3 imagens que gerenciam todo o back-end do sistema, a imagem **Node** que é está armazenado na fonte do projeto, a imagem **MySQL** que é feito pull do próprio Docker Hub e a imagem do **phpadmin** que também é puxada do Docker Hub.

> [!TIP]
> A imagem phpadmin está presente para facilitar a visualização da tabela Products e alterar diretamente os valores no banco de dados. Depois que executar o script **./start.sh**, acesse [localhost:8080](http://localhost:8080) que você terá está visualização da imagem abaixo:

![phpadminImage](/assets/imgs/phpadmin.png)

> [!WARNING]
> O banco da aplicação se chama **nest** e a tabela se chama **Product**.

# Dica para brincar com os dados da aplicação com script shell
Fique a vontade em fazer todas as operações de CRUD com os dados do sistema, pois os script shell foram seperados em funções para facilitar tal. Portanto, quando você quiser resetar os dados da aplicação para os dados padrões, não é necessário dá o **./start.sh** novamente, só é necessário executar o script **./mysql** no [diretório do script shell](./shell) e pronto! Dados resetados para os dados padrões! (Você pode visualizar os dados padrões da aplicação no diretório [db](./db), onde contém todos arquivos sql que são executados dentro da imagem do docker MySQL através do script [mysql.sh](./shell/mysql.sh)).

# Conslusão
Após esse procedimento, o sistema estará pronto para ser acessado. Basta clonar e executar o repositório [Front-end](https://github.com/GabrielBezerraDev/loja_virtual-front_end).




