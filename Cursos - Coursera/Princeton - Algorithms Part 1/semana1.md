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


## weighted quick-union
**DATA STRUCTURE**
  mesma que quick union, mas mantem um array extra para contar o número de objetos/andares contidos na raiz

**Find** : igual quick union | return root(p) == root(q);

**Union** : modifica a quick  union para:
  Link raizes com tamanhos/alturas menores em uma raiz maior
  atualiza o array extra = sz[]
  Modelo:
    let (i, j) = root(p), root(q)
    if  i == j return
    if sz[i] sz[j] { id[i] = j; sz[j] += sz[i];}
      else         { id[j] = i; sz[i] += sz[j];}

**COST MODEL**
  find = N = tempo proporcional ao deph de p e q.
  union = log N = tempo constante a raizes.
  ainda pode ser melhorado


## quick-union with path compression
**DATA STRUCTURE**
  após computar a raiz de 'p', seta ID de cada 'node' examinado até o ponto da raiz.
  na prática deixa a 'árvore' praticamente flat
  
  two-pass implementation
    adiciona um segundo loop a root() 
    para setar o id[] de cada 'node'até a raiz.
  simpler one-pass variant
    make every other noed in path point to its grandparent
      while i != id[i] {
        id[i] = id[id[i]];
        i = id[i];
      } return i;

**COST MODEL**
  read = constante
  em teoria não é linear, porém na prática é.
  N + M log N


Comparação de custos nos piores casos
  M N             quick-find
  M N             quick-union
  N + M log N     weighted quick-union
  N + M log N     quick-union + path compression
  N + M lg*N      weighted quick-union + path compression


Ex: 10^9 unions and finds with 10^9 objects
  weighted quick-union + path compression reduz de 30 ANOS para 6 SEGUNDOS.


## Aplicações
  **Percolation**
  **Dynamic Connectivity**
  Games (Go, Hex)
  Least common ancestor
  Equivalence of finite state automata
  Hoshen-Kopelman algorithm in physics
  Hinley-Milner polymorphic typee inference
  Kruskal's minimum spanning tree algorithm
  Compiling equivalence statements in Fortran
  Morphological attribute openings and closings
  Matlab's bwlabel() function un image processing

### Percolation
A model for many physical systems:
  N-by-N grid of sites
  Each site is open with probabiliity 'p' (or blocked with prob 1 - p)
"irá comunicar ou não"
  p > p* = quase certo que percolates
  p < p* = quase certop que não percolates
  qual é o valor de p*? algo próximo ed 0.593 (0.6)
    Monte Carlo simulation

  
# Analysis of Algorithms
## Alguns algorítimos de suceso:
  FFT algorithm = break down waveform of N samples into periodic components.
    discrete Fourier transform
    aplicação em imagens (DVD, jpeg etc)
    N log N steps
  Barnes-Hut algorithm
    n-body simulation
    simulação iteração gravitacional em N bodies
    N log N steps

## Scientific method
  Observe
  Hypothesize
  Predict
  Verify
  Validate

  Princípios:
    Experiments must be **reproducible**
    Hypotheses must be **falsiable**
