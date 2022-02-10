#Manipulação de dados

"""
O python não precisa dizer qual é o tipo de variável (str, float, int)
    ele reconhece automaticamente
Forma de tipagem dinâmica
    não precisa declarar o tipo explicitamente
"""

num_int = 5 #reconhece com INT
num_dec = 7.3 #reconhece como float
val_str = "qualquer texto" #reconhece como string

print(num_int)

"""
Como CONCATENAR
"""
print("O valor é:", num_int, "declarado com vírgula") #BASTA vírgula
print("O valor é: %i" %num_int, "declarado com porcentagemi") # %i=int e foi declarado depois %num_int


"""
Como CONVERTER a variável e CONCATENAR
"""
print("\n Convertendo int para string")
print("O valor é:", str(num_int))
print("O valor é: " + str(num_int)) #CONCATENADO com + para duas str

a = 1
print("Somando a + 2 =", a + 2)
