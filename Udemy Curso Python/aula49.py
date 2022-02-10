#Exercícios Práticos
"""
#1) Faça um algoritmo que leia um número e mostre se o mesmo é positivo,
#negativo ou zero.
print("Desafio #1\n")
print("Verifica se o número é possitivo ou negativo")
PositivoOuNegativo = int(input("Digite um número: "))

if(PositivoOuNegativo > 0):
    print("O número digitado é positivo\n")
elif(PositivoOuNegativo < 0):
    print("O número é negativo\n")
elif(PositivoOuNegativo == 0):
    print("o número é 0\n")


#2) Faça um algoritmo que leia um número e mostre se o mesmo é par ou ímpar.
print("\nDesafio #2")
print("\nVerifica se o número é par ou impar")
ParImpar = int(input("Digite um número: "))

if(ParImpar != 0):
    verifica = ParImpar % 2
    if(verifica == 0):
        print("O número é par\n")
    else:
        print("O número é impar\n")
else:
    print("Você digitou 0\n")

#3) Faça um algoritmo que leia dois números e imprima o maior.
print("\nDesafio #3")
print("\nVerificar o maior número entre dois")

MaiorOuMenor1 = int(input("Digite um número: "))
MaiorOuMenor2 = int(input("Digite outro número: "))

if(MaiorOuMenor1 > MaiorOuMenor2):
    print(MaiorOuMenor1, " É maior do que ", MaiorOuMenor2)
elif(MaiorOuMenor1 < MaiorOuMenor2):
    print(MaiorOuMenor1, " É menor do que ", MaiorOuMenor2)
elif(MaiorOuMenor1 == MaiorOuMenor2):
    print("Você digitou dois números iguais")
else:
    print("Você não digitou um número")

#4) Faça um algoritmo que peça a idade de uma pessoa
#e imprima na tela se a mesma já é maior de idade
#ou então, se a mesma é de menor.

print("\nDesafio #4")
print("Pedir idade e verificar se é maior de idade")

idade = int(input("Digite a sua idade: "))

if(idade >= 18):
    print("Você é maior de idade")
else:
    print("Você não chegou a maioridade")


#5) Faça um algoritmo que peça a idade do usuário e a idade da sua mãe.
#Em seguida, imprima na tela com quantos anos sua mãe o teve.

print("\nDesafio #5")
print("\nDescobrir idade da mãe quando teve o filho")

IdadeMae = int(input("Digite a idade de sua mãe: "))
IdadeFilho = int(input("Digite a sua idade"))

print("Sua mãe tinha", IdadeMae - IdadeFilho, "anos, quando você nasceu")

#6) Faça um algoritmo que imprima 50 vezes
#o caractere "-" na tela (sem a utilização de laços de repetição).

print("\nDesafio #6")
print("Imprimir '-' 50 vezes sem usar laço de repetição")

imprima50 = "-"
print(50 * imprima50)

#7) Faça um algoritmo que peça um número
#ao usuário e verifique se o mesmo é par ou então ímpar.
#já feito em outro anterior

#8) Faça um algoritmo que peça dois números.
#Primeiro, imprima o maior e, em seguida, o menor.

print("\nDesafio #8")
print("Verificar o maior e imprimir ele antes")

maiorantes1 = int(input("Digite um número: "))
maiorantes2 = int(input("Digite outro número: "))

if(maiorantes1 > maiorantes2):
    print(maiorantes1)
    print(maiorantes2)
elif(maiorantes1 < maiorantes2):
    print(maiorantes2)
    print(maiorantes1)
elif(maiorantes1 == maiorantes2):
    print("os núemros são iguais")
"""
#9) Faça um algoritmo que verifica se um determinado valor
# é um número inteiro.
"""
print("\nDesafio #9")
print("Determina ser valor é um número inteiro")

VerificaInteiro = 6.5
print(type(VerificaInteiro))
tiponumero = str(type(VerificaInteiro))
print(tiponumero)

if(tiponumero == "<class 'int'>" ):
    print("O número é inteiro")
else:
    print("Não é um número inteiro")


#10) Faça um algoritmo que verifica se um determinado valor é uma String.
idem 9
#11) Faça um algoritmo que verifica se um determinado valor é do tipo decimal.
idem 9
"""

#12) Faça um algoritmo que peça um valor numérico.
#Em seguida, verifique se o número é inteiro ou decimal.

"""
print("Desafio #12")
print("Pedir um número e verificar se int um decimal")
print("Digite um número: ")

pedirnumero = float(input())

if((pedirnumero %1) == 0):
    print("É um número inteiro")
else:
    print("É um número decimal")
"""

#13) Faça um algoritmo que leia três números
#e imprima na tela o maior deles.
"""
print("Desafio #13")
print("Ler input 3 números e imprimir o maior")

primeiro = float(input("Digite o primeiro número "))
segundo = float(input("Digite o segundo número "))
terceiro = float(input("Digite o terceiro número "))

lista = [primeiro, segundo, terceiro]
lista.sort(reverse = True)

print(lista[0])
"""

#14) Faça um algoritmo que leia três números
#e imprima-os em ordem crescente.
"""
print("Desafio #14")
print("Ler inpout 3 números e imprimir em ordem crescente")

primeiro = float(input("Digite o primeiro número: "))
segundo = float(input("Digite o segundo número: "))
terceiro = float(input("Digite o terceiro número: "))

lista = [primeiro, segundo, terceiro]
lista.sort()
print(lista)
"""

#15) Faça um algoritmo que leia um caractere
#e informe se o mesmo é uma vogal ou não.
"""
print("Desafio #15")
print("Ler um caractere e verificar se é vogal")

VerificaVogal = input("Digite um caractere:")
Vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

if VerificaVogal in Vogais:
    print("Você digitou uma vogal")
else:
    print("O que você digitou não é uma vogal")
"""

#16) Os endereços IP versão 4 são divididos
#em cinco classes: A, B, C, D e E.
#Os endereços no intervalo de 0 à 127 são classe A,
# de 128 a 191 são classe B,
#de 192 a 223 são classe C,
#de 224 à 239 são classe D
#e a partir de 240 são classe E.
#Faça um algoritmo que leia o primeiro octeto,
#no formato decimal de um endereço IP, e informe a sua classe.
"""
print("Desafio #16")
print("Verificar a classe do IP")

SeuIp = str(input("Digite o seu IP: "))
SeuIpLista = SeuIp.split(".")
PrimeirosDigitos = int(SeuIpLista[0])

if(PrimeirosDigitos <=127):
    print("Ip de Classe A")
elif(PrimeirosDigitos >=128 and PrimeirosDigitos <=191):
    print("IP de Classe B")
elif(PrimeirosDigitos >=192 and PrimeirosDigitos<=223):
    print("IP Classe C")
elif(PrimeirosDigitos >=224 and PrimeirosDigitos<=239):
    print("IP Classe D")
elif(PrimeirosDigitos >=240):
    print("IP Classe E")
"""


#17) Faça um algoritmo que receba um número inteiro,
#que represente um determinado mês do ano,
#e mostre o nome do mês correspondente.
#Por exemplo, se for informado o número 2,
#o algoritmo deverá exibir: fevereiro.
#O algoritmo também deve validar se a entrada está correta.

"""
print("Desafio #17")
print("Ler número = imprimir mês")

Meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

InsereMes = int(input("Insira o número do mês: "))

ChecaMes = InsereMes - 1
print(Meses[ChecaMes])
print(Meses[InsereMes-1])
"""

#18) Faça um algoritmo que valide uma data.
#A mesma deve ser formada por dia, mês e ano.
#Por exemplo, se o usuário digitar a data 10/8
#a mesma será inválida. Porém, caso a data seja 01/10/2018,
#a mesma deve ser considerada válida.
"""
print("Desafio #18")
print("Ler uma data e verifcar se é válida")

InsereData = input("Digite uma data: ")
ListaData = InsereData.split("/")
print(ListaData)
Dia = int(ListaData[0])
Mes = int(ListaData[1])
Ano = int(ListaData[2])

Meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
Meses31 = ["Janeiro", "Março", "Maio", "Julho", "Agosto", "Outubro", "Dezembro" ]
Meses30 = ["Abril", "Junho", "Setemrbo", "Novembro"]
Meses28 = ["Fevereiro"]
MesInserido = Meses[Mes-1]

if Dia >=31 and MesInserido in Meses30:
    print("Você Inseriu uma data inválida")
elif Ano < 1900:
    print("Você digitou um ano inválido")
elif Dia >= 32:
    print("Você Digitou uma dia inválido")
elif Mes >=13:
    print("Você digitou um mês inválido")
else:
    print("Você nasceu em", Dia, "de", MesInserido, "do ano de", str(Ano)+".")
"""
