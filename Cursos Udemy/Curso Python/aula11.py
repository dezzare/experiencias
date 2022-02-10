#Módulo da divisão = obter o resto da divisão

a = 3%2
b = 11%2
c = 13%3
d = 12%2
e = 12%3
f = 12%4
g = 12%5
h = 25%7
i = 27%7
j = 63%8
k = 60%8

print("3%2 = ", a)
print("11%2 = ", b)
print("13%3 =", c)
print("12%2 = ",d)
print("12%3 = ",e)
print("12%4 = ", f)
print("12%5 = ", g)
print("25%7 = ", h)
print("27%7 =", i)

print("\n", 5/7)
print(27/7)

print("\n63%8 =", j) #63/8 = 7 (e sobra 7
print("60%8 =", k)
#60/8 = 7 (e sobra 4, coloca a virgula, adiciona 0, 40/8 =5 = 7,5)

print(63/8)
print(60/8)

num1 = float(input("Digite 1 numero"))
num2 = float(input("Digite outro numero"))

divisao = num1 / num2
resto = num1 % num2
print()
print(num1, "dividido por", num2, "é igual a:", divisao)
print("O resto da divisão entre", num1, "e", num2, "é de:", resto)
