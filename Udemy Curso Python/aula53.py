#Aula 55 = Atribuição Condicional

#Estrutura para simplificar o código
#o valor a ser atribuído será aquele que satisfazer a condição
#não precisando utilizar uma função IF completa

"""
Exemplo de atribuição Condicional
<variavel> = <valor1> if (True) else <valor2>
var = 10 if (True) else 20
"""
x = 10
texto = "sim" if x == 10 else "não"
print(texto)


#Exemplo de atribuição condicional e comparando com o IF completo
num1 = int(input("Digite um número: "))
p = "par" if num1 % 2 == 0 else "ímpar"
print(s)

#agora o algoritmo com if, que contém 3 linhas a mais

num2 = int(input("Digite um número: "))
if(num2 % 2 ==0):
    m = "par"
else:
    m = "impar"
print(m)
