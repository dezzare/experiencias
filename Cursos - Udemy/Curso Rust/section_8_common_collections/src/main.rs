use std::collections::BinaryHeap;

fn main() {
    let mut nums: Vec<i32> = vec![];

    nums.push(1);
    nums.push(2);
    nums.push(3);

    let pop = nums.pop(); // Option<T> Some ou None
    let first = nums.first(); //Option<T> Some ou None
    let two = nums[1]; // copy
                       // possível tb usar &nums[1] se não tiver copy
                       // .last
                       // .first_mut
                       // .last_mut

    println!("pop = {:?}, first = {:?}, two = {}", pop, first, two);
    println!("len = {}", nums.len());
    println!("is empty = {}", nums.is_empty());

    nums.insert(0, 10);
    nums.insert(2, 25);
    nums.insert(3, 33);

    nums.remove(3); // remove intem do index 3

    println!("{:?}", nums);

    nums.sort();
    println!("{:?}", nums);

    nums.reverse();
    println!("{:?}", nums);

    // adicionar dependência rand
    // adicionar no cabeçlaho tb:
    // use rand::seq::SliceRandom;
    // use rand::thread_rng;
    // nums.shuffle(&mut thread_rng());
    // rng = random number generator

    // use std::collections::BinaryHeap;
    // adiciona o numero  maior na frente

    let mut bheap = BinaryHeap::new();

    bheap.push(1);
    bheap.push(10);
    bheap.push(21);
    bheap.push(6);
    bheap.push(5);

    println!("{:?}", bheap);
    bheap.pop();
    println!("{:?}", bheap);
    println!("{:?}", bheap.peek()); //retorna Some() ou None
                                    // peek deixa o valor, apenas retorna o valor

    // binary tree map E hash map
    // hash set
    // tem bastante material no livro e documentação
    // !!! tirar um tempo para estudar a fundo
}
