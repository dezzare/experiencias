#aula 54 = Atribuição Múltipla

#Troca de valores de forma simples
a = 10
b = 5
x = a
a = b
b = x

#Troca de valores de forma Múltipla
a = 10
b = 5
a, b = b, a
print(a, b)

#Mais elaborada:
a,b,c = 2,4,8
print("A=", a)
print("B=", b)
print("C=", c)
a,b,c = a*2, a+b+c, a*b*c #calcula tudo direita, depois atribui p/ esquerda
print("A = a*2", a) #caso calcular 1 por um, a seria4, aterava a proxima var
print("B = A+B+C", b) #iria alterar este em 2
print("C = a*b*c", c)
