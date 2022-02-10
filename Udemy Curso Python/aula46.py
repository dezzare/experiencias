#Operadores lógicos

"""
Possuem a capacidade de unir expressões lógicas
e, assim, formar uma nova expressão
"""

"""
Operadores lógicos:
and
or
not
is
is not
in
not in
"""

print("2<4 and 2==4", 2<4 and 2==4) #Falso
print("2>4 or 2<4", 2>4 or 2<4) #Verdadeiro
print("not(2>4 or 2<4)", not(2>4 or 2<4)) #inverte, negação da expressão contida = Falso

print("2 é 2?", 2 is 2)
print("type 2", type(2))
print("classe de 2 é int?", type(2) is int)
print("classe de 2.0 é int?", type(2.0) is int)
