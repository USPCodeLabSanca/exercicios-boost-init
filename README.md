# exercicios-boost-init
Este é um repositório com os exercícios lançados semanalmente pela equipe do CodeLab para promover o aprendizado de Git, React, Node e AWS, ligada às aulas do Dev.Learn 2024.2!

O intuito deste repositório é que seja clonado pelo usuário na sua máquina, crie a sua pasta com o seu nome no diretório ```/repos``` e faça os seus exercícios dentro dela. Toda semana, serão adicionados novos exercícios para que você possa resolver do seu jeito. Também serão disponibilizados resoluções exemplos para mostrar um jeito de fazê-lo. 

Isso será um meio para começar a utilizar e entender o funcionamento do Git. Para isso, o usuário terá que clonar, criar uma branch, commitar e realizar push na branch criada, e fazer uma Pull Request para a branch principal deste repositório. Todas as explicações sobre como realizar cada passo será explicado mais adiante.

## Para começar, você deve ter instalado o Git e o Node na sua máquina.
### Instalando o Git

- Baixe o Git neste <a href="https://git-scm.com/downloads">site</a>.
- Configure o seu Git abrindo o Git Bash e nele digitando esses dois comandos:
```
    git config --global user.name <seu_username>
    git config --global user.email <seu_email>
```
- Caso tenha quaisquer dúvidas sobre Git, confira <a href="https://tinyurl.com/slide-git01">esses slides</a>

### Instalando o Node
Para este passo, é recomendado que se utilize um **Node Version Manager** para instalar o Node e o npm. Um exemplo é o ```nvm```:

- Instalação para <a href="https://learn.microsoft.com/pt-br/windows/dev-environment/javascript/nodejs-on-windows">Windows</a>
- Instalação para <a href="https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/">Linux</a>

## Setup do repositório na sua máquina

Com o Git instalado, clone o repositório com:
```
git clone https://github.com/USPCodeLabSanca/exercicios-boost-init.git
```

No seu IDE favorito, abra o diretório onde você clonou o repositório, vá para a pasta ```repos```:
```
cd repos
```
Em seguida, crie um novo diretório com o seu nome:
```
mkdir <seu-nome-completo>
```
Este será o seu diretório dentro deste repositório para você se organizar e manter suas resoluções de exercícios do jeito que você achar melhor, portanto, faça as alterações apenas nele! 

## Como criar Branches, e realizar Commits, Pushs e PRs?

💡 Essa seção é importantíssima para que, em projetos futuros, possamos trabalhar em equipe, com cada um realizando suas alterações simultaneamente no repositório sem ~muitos~ conflitos

### Criando uma Branch

Será necessário realizar este passo **apenas 1 vez**. Isso porque, com isso, você criará uma versão diferente do repositório. Rode o seguinte comando para criar sua branch (escolha um nome que seja improvável de se repetir)
```
git checkout -b repo/<nome-da-sua-branch>
```
O comando ```checkout``` serve para mudar de branch. Com a adição do ```-b```, o comando cria uma branch nova para você utilizar, e já entra nele. 

Agora, verifique se você está na branch correta utilizando o comando:
```
git branch
```

Ele deve retornar algo nesse formato:
```
* repo/<nome-da-sua-branch>
main
```

E pronto! Agora você já pode começar a codar!

### Desenvolvendo seu código, realizando commits e mandando para a sua branch

Antes de desenvolver seu código, é interessante sempre rodar o seguinte comando:
```
git pull origin main
```
💡 Esse passo é necessário para que você sempre tenha os conteúdos e arquivos atualizados (em relação à branch ```main``` deste repositório remoto) no seu repositório local.

Faça suas alterações, e adicione os arquivos que você quer mandar para a sua branch, no repositório remoto, com o seguinte comando:
```
git add <arquivos>
```

Faça um commit na sua branch do **repositório local** com o seguinte comando:
```
git commit -m "breve descrição das alterações"
```

Para enviar as alterações na sua branch do **repositório remoto**, você deve rodar o seguinte comando:
```
git push origin repo/<nome-da-sua-branch>
```
💡 Isso é um exercício muito legal para que você se familiarize mais com o Git. Pode ser que atualmente não faça muito sentido, mas com o tempo você pegará o significado de cada passo.

### Abrindo uma Pull Request para a Main

Com tudo pronto, vá até a página do repositório no github, vá para a aba ```Pull Requests``` e crie uma PR nova. Ao criar, garanta que você esteja puxando a sua branch para a main, nesse formato:
```
main <- repo/<nome-da-sua-branch>
```

Ao terminar, um dos coordenadores poderá aprovar sua PR, e então, as alterações que você fez na sua branch será passada para a main. 

💡 Esse passo pode parecer meio desnecessário, mas saiba que é um recurso importante que você aprenderá para o futuro.
