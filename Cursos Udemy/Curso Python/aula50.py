#aula 51 = ESCOPO

#Lugar onde que a variável pode ser acessada

#Exemplo abaixo contém, no momento, coisas que não foram estudadas ainda

a = 1
b = 2

def soman_num(var1, var2):
    s=var1+var2 #SEGUNDO ESCOPO
    return s

def imprime(x_vezes):
    for i in range(x_vezes):#Terceiro ESCOPO
        print(i) #Quarto ESCOPO

print(soman_num(a, b))
imprime(5)
