# Union Find
basic approach to developing and analyzing algorithms by considering the dynamic connectivity problem.
Introdução ao **union-find** data type, e várias de suas implementações (quick find, quick union, weighted quick union, weighted quick union with path compression).


## quick-find
**DATA STRUCTURE**  
  integer array __id[]__ de tamanho __N__
  Interpretação: **p** e **q** são conectados **bicondicionalmente** (se e somente se) pela mesma __id__

array de exemplo: id = [0, 1, 1, 8, 8, 0, 0, 1, 8, 8]
numeros relacionados =  0  1  2  3  4  5  6  7  8  9 

**Find** : checa se **p** e **q** tem o mesmo __id__
  id[6] = 0 | id[1] = 1 então 6 e 1 não estão conectados

**Union** : para "merge" de componentes contendo **p** e **q**, mude todas entradas que tem ID iguais id[p] para id[q]
  união de id[6] e id[1] | id = [**1**, 1, 1, 8, 8, **1**, **1**, 1, 8, 8]

**COST MODEL** 
  find = O(n)
  union = O(N^2)


## quick-union (lazy approach)
**DATA STRUCTURE**
  integer array __id[]__ de tamanho __N__
  Interpretação: __id[i]__ é "parente" de 'i' 
  Root de 'i' é id[id[id[...id[i]...]]] = conjunto de tree

**Find** : checa se **p** e **q** tem a mesma Raiz(Root)

**Union** : para "merge" de componentes contendo **p** e **q**, aplica o id da Raiz de 'p' para a id de raiz de 'q'
  vai formando uma árvore

**COST MODEL**
  find = N (pior caso)
  trees podem ficar muito grande
  acaba custando caro, tendência de ter mesma perf de quick-find
