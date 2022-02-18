#aula 59 =  For Loop
#aula 60 = Função Range
#aula 61 = Laço For e Função Range
#aula 62 = Instrução Break
#aula 63 = Instrução Continue

#FOR = estrutura de repetição
#executa um ciclo para cada elemento do objeto que está sendo iterado.
#FOR = looping com intervalo determinado, diferente do while.

for c in "Pedro": #Pedro = 5 letras = 5 ciclos
    print(c)

#Função RANGE
#Retorna uma série numérica no intervalo enviado
    #e cujo os elementos contidos serão gerados sob demanda
#range([start], stop[, step])
    #Start = onde vai iniciar
    #stop = onde vai parar
    #step = distancia entre os elementos/passos
print("\nrange(0, 10, 2)")
    #star = 0
    #stop = 10, mas não está incluído
    #step = 2, ou seja: de dois em dois.
print(type(range(0, 10, 2)))
print(list(range(0, 10, 2)))

print("\nrange(0, 10, 1)")
print(type(range(0, 10, 1))) #chega ao 10 para, mas não inclui
print(list(range(0, 10, 1)))

print("\nrange(10)") #range(stop[)
print(type(range(10)))
print(list(range(10)))

print("\nrange(1, 15)") #range([start], stop[)
print(type(range(1, 15)))
print(list(range(1, 15)))

print("\ntabuada de 3")
print(list(range(0, 31, 3)))

print("\nTabuada de 3 ao contrário")
print(list(range(31, 0, -3)))

#Laço FOR e função range.
for i in range(10):
    print(i)



#Instrução BREAK.
#BREAK = instrução que interrompe o laço de execuçãoptimize

for i in range(10):
    if(True):
        break

i = 10
while(i<100):
    i += 1
    if(True):
        break

print("Antes de entrar no laço for range break")
for item in range(10):
    print(item)
    if(item==6):
        break
print("Depois do break")


#instrução CONTINUE
#interrompe o ciclo atual, mas não interrompe o laço.

print("\nAntes do laço")
i = 0
while(i<10):
    i += 1
    if(i%2==0): #numéro que é par não será impresso
        continue #bloqueia e retorna ao início do ciclo, não imprime
    if(i>5):
        break #para o laço, não imprime o else
    print(i)
else:
    print("else")
print("\nFim")
