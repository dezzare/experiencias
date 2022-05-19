fn main() {
    // Aula 20 - Ownership
    fn stack_heap() {
        let var = 1; // on the STACK
        let mut s = "hello".to_string(); // on the heap
        s.push_str(" world");
        println!("{}, {}", var, s);
    } //vars are dropped
    stack_heap();

    // Aula 21 - Move
    // maioria dos tipos implementa move, outros copy
    fn move_owner() {
        let x = vec!["Pedro".to_string()];
        let y = x; // toma ownership do valor de x, X deixa de existir
        println!("{:?} ", y);
    }
    move_owner();

    // Aula 22 - Clone
    fn clone() {
        // pode ser 'caro'
        let x = vec!["Pedro".to_string()];
        let y = x.clone();
        let z = y.clone();
        println!("{:?}, {:?}, {:?}", x, y, z);
    }
    clone();

    // Aula 23 - Copy
    // implementados em tipos já armazenados na STACK
    // integer, float, char, boolean, tuple(?)
    fn copy() {
        let x = 1;
        let y = x;
        println!("{x}, {y}");
    }
    copy();

    // Aula 24 - More Moves
    fn more_moves() {
        let s = String::from("takes");
        let val = 1;
        takes_ownership(s);
        // println!("{}", s); não consegue imprimir, s não é owner

        make_copy(val);

        let str1: String = give_ownership();
        println!("{}", str1);

        // fn pega owner str1 e devolve p/ str3
        let str3: String = take_and_give(str1);
        println!("{}", str3);
        // println!("{}", str1); str1 não é mais owner

        // loop quebra, pois assume o owner e não consegue repetir
        //loop {
        //    str3 = val.to_string();
        //}
    }

    fn takes_ownership(s: String) {
        let strin = s;
        println!("{}", strin);
    }

    fn make_copy(one: u32) {
        let val1 = one;
        println!("{}", val1);
    }

    fn give_ownership() -> String {
        "given".to_string()
    }

    fn take_and_give(str2: String) -> String {
        str2
    }

    more_moves();

    // Aula 25 - References e Borrowing
    fn references() {
        let mut s = String::from("hello");
        change_string(&mut s);
        println!("{}", s);
    }
    fn change_string(some_string: &mut String) {
        some_string.push_str(" world");
    }
    references();
}
