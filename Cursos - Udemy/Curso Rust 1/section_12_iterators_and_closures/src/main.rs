// Closure em Rust são feitas para serem rápidas/eficientes
// NÃO são alocadas na HEAP, a não ser se colocadas em um container(ex: Vector)

#[derive(Debug)]
struct City {
    city: String,
    population: u64,
}
#[derive(Debug)]
struct Item {
    name: String,
}

#[derive(Debug)]
struct Range {
    start: u32,
    end: u32,
}

impl Iterator for Range {
    type Item = u32;
    fn next(&mut self) -> Option<Self::Item> {
        if self.start >= self.end {
            return None;
        }
        let result = Some(self.start);
        self.start += 1;
        result
    }
}

// fn sort_pop_sem_closure(city: &mut Vec<City>) {
//     city.sort_by_key(pop_helper_sem_closure)
// }

// //helper fn
// fn pop_helper_sem_closure(pop: &City) -> u64 {
//     pop.population
// }

fn sort_pop_closure(pop: &mut Vec<City>) {
    pop.sort_by_key(|x| x.population)
}

fn main() {
    let cidade_a = City {
        city: String::from("Cidade A"),
        population: 20000,
    };
    let cidade_b = City {
        city: String::from("Cidade B"),
        population: 15000,
    };
    let cidade_c = City {
        city: String::from("Cidade C"),
        population: 5000,
    };
    let cidade_d = City {
        city: String::from("Cidade D"),
        population: 25000,
    };
    let cidade_e = City {
        city: String::from("Cidade E"),
        population: 200000,
    };

    let mut vec: Vec<City> = Vec::new();
    vec.push(cidade_a);
    vec.push(cidade_b);
    vec.push(cidade_c);
    vec.push(cidade_d);
    vec.push(cidade_e);

    // sort_pop_sem_closure(&mut vec);
    sort_pop_closure(&mut vec);
    println!("Cidades ordenadas: {:?}\n", vec);

    //chama fn de outra(seguinte) aula
    traits();
    iterators();
}

fn type_anotation() {
    // declaração completa
    let add = |x: i32| -> i32 { x + 1 };
    // declaração sem typo, vai acusar erro
    let add2 = |x| x + 1; // type anotation needed, dar typo p/ closure
    add2(1); // com esta declaração o erro desaparece, pois infere um tipo subjetivamente;

    // declaração sem tipo
    let example = |x| x;
    // retira o erro, pois infere um tipo
    let string = example(String::from("string"));
    // let num = example(2); //erro, pois example espera uma string
}

fn traits() {
    //Fn, FnMut, FnOnce

    // Fn
    // borrow values, imutáveis
    // "maior categoria"
    // includes all fn functions

    //FnMut
    // podem ser chamadas inúmeras vezes
    // borrow mutables values

    //FnOnce
    // só pode ser chamada uma vez
    // não pode borrow mais de uma vez o mesmo valor

    //exemplos:
    // |args| vec.contains(args) = Fn
    // |args| vec.push(args) = FnMut (necessário mut p/ push)
    // || drop(value) = FnOnce (só  dropa uma vez)

    //valores mutáveis não implementam Copy / Clone
    let y = 2;
    let add_y = |x| x + y;
    let copy_closure = add_y;
    println!("{}", add_y(copy_closure(5))); // resultado = 9 (2 + 2+5)

    // erro:
    // let add_z = |x| {
    //     z += x;
    //     z
    // };
    // let copy_z = add_z;
}

fn iterators() {
    // qualquer tipo que implementa o iter trait

    let vec = vec![1, 2, 3];

    for val in vec.iter() {
        println!("{}", val);
    }

    // outra forma, p/ visualizar o trait iterator
    let vec2 = vec![1, 2, 3];
    let mut iter = (&vec2).into_iter();

    while let Some(v) = iter.next() {
        println!("{}", v);
    }

    //exemplo trait + closure
    let mut vec: Vec<Item> = Vec::new();
    vec.push(Item {
        name: String::from("coat"),
    });
    vec.push(Item {
        name: String::from("shirt"),
    });
    vec.push(Item {
        name: String::from("shorts"),
    });
    vec.push(Item {
        name: String::from("shoe"),
    });

    let checked = check_inventory(vec, String::from("shirt"));
    println!("{:?}", checked);

    let mut range = Range { start: 0, end: 10 };
    for r in range {
        println!("{}", r);
    }

    let mut range2 = Range { start: 0, end: 10 };
    let vec2: Vec<u32> = range2.filter(|x| x % 2 == 0).collect();
    println!("{:?}", vec2);
}

// estrutura iterator:
// pub trait Iterator {
//     type Item;
//     fn next(&mut self) -> Option<Self::Item>;
// }

fn check_inventory(items: Vec<Item>, product: String) -> Vec<Item> {
    //iter take owner do vec
    // filter novo vec com valores filtrados(true)
    // closure pega os parametros para comparação do filtro
    // collect pega e retorna os valores
    items.into_iter().filter(|x| x.name == product).collect()
}

// implementar próprio iterator
// no inicio = struct range + impl
