#Ponto Flutuante

num_int1 = 5 #reconhece com INT
num_int2 = 6
num_dec1 = 7.3 #reconhece como floating point
num_dec2 = 8.2
val_str1 = "texto1" #reconhece como string
val_str2 = "texto2"

print("Concatenando decimal:", num_dec1)
print("Concatenando decimal: %f" %num_dec1, "= %f")
print("Concatenando decimal: %.10f" %num_dec1, "= %.10f")
print("Concatenando decimal: %.2f" %num_dec1, "= %.2f")

"""
Utilizando o "+" para CONCATENAR
    Somente funciona quando utilizando os mesmos tipos de variável
    int + INT
    float + float
    str + str
"""

print("\nConcatenando str + ' ' + str:")
print(val_str1 + " " + val_str2)

print("\nConcatenando str +  str(float)")
print( val_str1 + str(num_dec1))

print("\nConcatenando strings")
print("Concatenando strings %s" %val_str1)
print("Concatenando strings " + val_str1)

print("\nConcatenando INT")
print(num_int1 + num_int2)
print("Concatenando INT: %i" %num_int1)
print(num_int1, num_int2)

print("\nTestes")
print("Concatenando str + int")
print(val_str1 + str(num_int1))
print(val_str1, num_int1)
print(val_str2, num_dec1)
print(val_str2 + str(num_dec1))
