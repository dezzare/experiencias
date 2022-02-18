#Operadores relacionais na prática

numero1 = input("Digite um número: ")
numero1 = int(numero1)

numero2 = int(input("Digite um segundo número: "))

if(numero1==numero2):
    print("O número %d ´e igual a %d." %(numero1, numero2))
if(numero1!=numero2):
    print("O número %d é diferente de %d" %(numero1, numero2))
if(numero1>numero2):
    print("O número %d é maior que %d" %(numero1, numero2))
if(numero1<numero2):
    print("O número %d é menor do que %d" %(numero1, numero2))
