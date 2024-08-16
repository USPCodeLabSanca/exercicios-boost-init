# exercicios-boost-init
Este é um repositório com os exercícios lançados semanalmente pela equipe do CodeLab para promover o aprendizado de Git, React, Node e AWS, ligada às aulas do Dev.Learn 2024.2!

O intuito deste repositório é que seja clonado pelo usuário na sua máquina, crie a sua pasta com o seu nome no diretório ```/repos``` e faça os seus exercícios dentro dela. Toda semana, serão adicionados novos exercícios para que você possa resolver do seu jeito. Também serão disponibilizados resoluções exemplos para mostrar um jeito de fazê-lo. 

Isso será um meio para começar a utilizar e entender o funcionamento do Git. Para isso, o usuário terá que clonar, criar uma branch, commitar e realizar push na branch criada, e fazer uma Pull Request para a branch principal deste repositório. Todas as explicações sobre como realizar cada passo será explicado mais adiante.

## Para começar, você deve ter instalado o Git e o Node na sua máquina.
### Instalando o Git

- Baixe o Git neste <a href="https://git-scm.com/downloads">site</a>.
- Configure o seu Git, conferindo os slides sobre git <a href="https://tinyurl.com/slide-git01">aqui</a>.

### Instalando o Node
Para este passo, é recomendado que se utilize um **Node Version Manager** para instalar o Node e o npm. Um exemplo é o ```nvm```:

- Instalação para <a href="https://learn.microsoft.com/pt-br/windows/dev-environment/javascript/nodejs-on-windows">Windows</a>
- Instalação para Linux <a href="https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/">Linux</a>

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
mkdir *SEU-NOME*
```
Este será o seu diretório dentro deste repositório, portanto, faça as alterações apenas nele!

## Como criar Branches, e realizar Commits, Pushs e PRs?
### Criando uma Branch
Será necessário realizar este passo **apenas 1 vez**. Isso porque, com isso, você criará uma versão diferente do repositório.

```
git checkout -b repo/*SEU-NOME*
```

```
git branch
```

```
* repo/*SEU-NOME*
main
```

TBD
