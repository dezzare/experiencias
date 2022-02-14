# Exercícios

ps. verificar/pesquisar as respostas

### Cap 2

**Exercise 1** - Foi apresentado dois pseudo códigos, e perguntou qual seguia o projeto mais ortogonal.

class Split 1 {

constructor(fileName) #open the file for reading

def readNextLine() #move to the next line

def getField(n) #returns nth field in currente line

}

OU

class Split2 {

constructor(line) #splits a line

def getField(n) #return nth field in current line

}

R: minha resposta seria Split2. Porque o primeiro faz duas funções meio que ligadas, ler a proxima linha() e outra para pegar(). Enquanto a segunda é mais direta.

**Exercise 2** - qual a diferença entre orthogonality entre OO e Linguagens Funcionais? Are these differences inherente in the languages themselves, or just in the way people use them?

R: Nunca estudei nenhuma linguagem funcional, apenas o conceito. Mas o conceito de "orthogonality" me parece serr aplicável a qualquer paradigma. E, pelo conceito de programação funcional, me parece que seria mais fácil ou evidente, a aplicação/reconhecimento, mas, ao mesmo tempo, mais fácil de fugir do padrão e dividir o trabalho em multiplas funções consideradas desnecessárias pela "ortogonality".

**Exercise 4** - implement a mini-language to control a simple turtle-graphics system. Langague single-letter command. input draw a rectangle:

P 2 # select pen 2
                    D # pen down
                    W 2 # draw west 2cm
                    N 1 # then north 1
                    E 2 # then east 2
                    S 1 # then back south
                    U # pen up

Implement the code that parses this language. It should be designed so that it is simple to add new commands.

R: Me parece um exercício bem mais avançado do que o nível que estou. Unica solução semelhante, seria algo que fiz uma vez para conversão de números romanos. Com uma constante array e uso de loop.

Exercício 5 é ligado/complementação do 4, pedindo para escrever funções para cada comando.

**Exercise 6** Design a BNF grammar to parse a time specification. All of the following exemples should be accepted: 4pm, 7:38pm, 23:42, 3:16, 3:16am.

R: Tive que pesquisar/estudar o que era BNF. Aparentemente é um pseudocodigo. Define regras, ou expressões, com "<" ">" envolvendo os termos. Utiliza a simbologia ::= que é lido como ¨may expand into¨ ou ¨may be replaced with¨. E também sendo possível usar regex.

<number> ::= [0-9]

<hour> ::= number | number number

<minutes> ::= number number

<ampm> ::= am | pm

<format> ::= hour ampm | hour : minute ampm | hour : minute



Pesquisar: exercício 17.
