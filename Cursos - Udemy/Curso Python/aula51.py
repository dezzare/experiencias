#aula 52+53 = Operadores de Atribuição

#O valor a direita(10) do Operador(=) é atribuído ao da esquerda(a)
    # a = 10

#Atribuição x Comparação
    #Atribuição = valor
    #Comparação == Comparação (True)

a = 1
print(a)
a = a + 1 #vai adicionar 1 a variável
print(a)
a+= 1 # atalho matemático, mesmo efeito do anterior
print(a)

"""
Atalhos matemático deixam o código mais limpo e rápido
Exemplos:

x = 9
y = 3

+=  (x += y)    =   12
-=  (x -= y)    =   6
*=  (x *= y)    =   27
/=  (x /= y)    =   3
%=  (x %= y)    =   0

"""

x = 9
y = 3

print("X é igual a:", x)
print("Y é igual a:", y)
print("Executando x += y")
x += y
print("Resultado de X:", x)
x = x + 1
print("Resultado de x + 1", x)
