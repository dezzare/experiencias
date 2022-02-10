#Tomada de decisão I e II (aulas 42 e 43)

"""
Estrutura de seleção única
if(True)
  FaçaIsso();
"""

"""
Estrutura de seleção dupĺa
if(True):
  FaçaIsso();
else
  FaçaAquilo();

if(True):
  FaçaIsso();
elif(True)
  FaçaAquilo();
"""

a = 10

if(a==10):
    print("O valor é igual a 10")

acao = int(input("Digite '1' para sim e digite '2' para não"))

if(acao==1):
    print("Você disse que sim!")
elif(acao==2):
    print("Você disse que não")
else:
    print("Digite somente 1 ou 2")
