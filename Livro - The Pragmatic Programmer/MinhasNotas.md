# Minhas anotações

obs. não tenho pretensão alguma de ensinar algo com estas notas. Elas são tão anotações, que muitas vezes só farão sentido para mim, inclusive citações que sequer aparecem no livro e que trouxe de outros lugares.



Processo contínuo de aprendiazagem, repetição.

Kaizen

¨You will have to lose hundreds of games before becoming a good player.¨ - Capablanca

take control

entropy = desordem

viu problema, conserte!

bom programador não da uma de joão sem braço

controle situação quando o problema é pequeno

nào deixe para depois

trabalho em equipe

facilitador

reconheça seus limites

formação contínua

curiosidade, aprenda sobre outras coisas, não se limite



# OBJETIVOS

Aprender PELO MENOS uma nova linguagem nova por ano
LER livros técnicos - autor propõe 1 cada trimestre
LER livros não técnicos
Aulas
Participação ATIVA em grupos
Experimentar situações e ambientes diferentes
Estar sempre informado/atualizado de acontecimentos
Diversidade de fontes de informações



# Sugestão de leitura:

Frederick P. Brooks, Jr. 1995. The Mythical Man-Month-Essays on Software Engineering

T. DeMarco, T. Lister. Peopleware: Productive Projects and Teams

McCOWN, R.R; DRISCOLL, M.P. Using Collaborative Writing and Problem-Based Learning in the College Classroom. In Proceedings of the workshop on computer-supported collaborative learning.1995.

Albert J. Bernsteins, Sydney Craft Rozen. Dinosaur Brains: Dealing with All THOSE Impossible People at Work

Bria W. Kernighan, Rob Pile. The Practice of Programming

Good Desing is easier to change than bad design



**ETC = Easier to Cahnge**

ETC = value, not a rule

**DRY = Don´t Repeat Yourselft**

**Orthogonality** = independence / decoupling

changes in one do not affect any of the others

welldesigned system




## Coding

**Keep your code decoupled**
modulos que não dependam de outros módulos

'Law of Demeter

**Avoid Global Data**

**Avoid Similar Functions**

**Use Tracer Bullets to Find the Target**

O livro se refere a protótipos no sentido de algo construído apenas para visualização.
Nesta parte do livro ele **NÃO SE REFERE A PROTOTYPE no sentido de função** dentro da linguagem de programação.



### Things to prototype

Architecture
New functionality in an existing system
Struture or contenct of external data
Third-party tools or componnetes
Performance issues
User interfaces design


### How to use prototypes

**Correctness** = be able to use dummy data where appropriate

**Completess** = uso limitado

**Robustness** = error checking

**Style** = não devem ter muito o que documentar


### Domaind Languages

ferramenta para desenvovler de maneira mais clara
capturar requisitos dos usuários
visualização do problema
melhor entendimento com exercício (exercise 4 a 8)
Estimate to Avoid Surprises
Achieve Editor Fluency

DEBUG
Arrume, não reclame, faz parte do trabalho
Fix the problem, Not the Blame.
Mindset = DON´T PANIC!
**READ THE DAMN ERROR MESSAGE**

Converse com um colega sobre, pontuando todos os detalhes, se não tiver colega, converse com o cachorro, em voz alta!

Don´t assume it - Prove it

**Debug checklist**

1 - Is the problem being reported a direct result of the underlying bug, or merely a symptom?

2 - Is the bug really in the framework you are using? Is it in the OS? Or is it in your code?

3 - If you explained this problem in detail to a coworker, what would you say?

4 - If the suspect code passes its unit testes, are the tests complete enough? What happens if you run the tests with ´this' data?

5 - Do the condition that caused this bug exist anywhere else in the system? Are there other bugs still in the larval stage, just waiting to hatch?




## Manipulação de texto

Programmers manipulate text the same way woodworrkers shape wood.

Text manipulation language

AWK SED

Python Ruby



**Daybook**

**Cath and Release is for Fish**
menos verboso


### Crash Early

filosofia adotada p Erlang, Elixir
**"Defensive programming is a waste of time. Let it crash!"**
mas garanta que há log dos erros

Assertions
não usar assertions onde deveria ter um "error handling"
mas apenas checar coisas que não deveriam acontecer.
ficar atento na implementação, eis que podem criar novos erros
não retirar as assetions p/ "deixar mais performático"
não são apenas debbuging tools
dão feedback necessário para consertars bugs que são difíceis de reproduzir


## How to Balance Resources

**"Termine" o que você começou**
cuidado com variáveis compartilhadas

debug files criados, registrado em DB automaticamente, há alguma rotina p "expirar"?

Nest Allocations
basic pattern ressource allocation
desalocar em ordem inversa que foram alocados
não vai deixar órfãos
quando alocar em locais diferentes, faça na mesma ordem
reduz possibilidade de deadlock\

exceptions
usar variável de escopo
Rust = após return a memória é "reclamada"
try catch finally


**Trust no one, including ourselves**
criar wrappers para rastrear alocação e desalocação de recursos
bom lugar = main loop esperando p próximo request;

**Take Small Steps = always**
observe o caminho que já está iluminado, não olhe p escuro
"Who would win the desktop GUI wars, Motif or OpenLook?"



