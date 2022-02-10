#Operadores relacionais compostos

"""
Operadores relacionais
>
<
>=
<=
"""

idade = int(input("Informe a sua idade: "))

if(idade<=0):
    print("A sua idade não pode ser 0 ou enor do que 0!")
else:
    if(idade>150):
        print("A sua idade não pode ser superior a 150 anos!")
    else:
        if(idade<18):
            print("Você precisa ter mais do que 18 anos!")

#agora o mesmo código de forma mais simplificada, usadno o elif:

if(idade<=0):
    print("A sua idade não pode ser 0 ou enor do que 0!")
elif(idade>150):
    print("A sua idade não pode ser superior a 150 anos!")
elif(idade<18):
    print("Você precisa ter mais do que 18 anos!")

