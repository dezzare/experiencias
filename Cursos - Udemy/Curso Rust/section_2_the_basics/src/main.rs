fn main() {
    // Aula 7 - Hello World
    println!("Hello, world!");

    // Aula 8 - Variáveis
    let x = 5;
    let mut y = 6;

    println!("O valor de x é {} e y = {}", x, y);

    y = 5;
    println!("Y é mut, pode alterar o valor {y}");

    const SECONDS: i8 = 60;
    println!("O valor de SECONDS = {SECONDS}");

    // Aula 9 - data types
    let inteiro: u8 = 10;
    let inteiro_sig: i8 = -10;
    let decimal = 02_55;
    let hex = 0xff;
    let octal = 0o377;
    let binary = 0b1111_1111;
    let byte = b'A';
    let float: f32 = 1.0;
    let bool: bool = true;
    let c: char = 'c';

    println!("inteiro = {inteiro}");
    println!("inteiroSig = {inteiro_sig}");
    println!("decimal = {decimal}");
    println!("hex = {hex}");
    println!("octal = {octal}");
    println!("binary = {binary}");
    println!("byte = {byte}");
    println!("float = {float}");
    println!("bool = {bool}");
    println!("char = {c}");

    // Aula 10 tuples
    let tuples = (50, "oi", true, 1.0);
    println!("{}, {}, {}, {}", tuples.0, tuples.1, tuples.2, tuples.3);
    let (tupx, tupy, tupz, tupa) = tuples;
    println!("{tupx}, {tupy}, {tupz}, {tupa}");

    // Aula 11 arrays
    let mut array = [0, 1, 2];
    println!("{}, {}, {}", array[0], array[1], array[2]);
    array[0] = 3;
    println!("{}", array[0]);
    let arrayi: [i32; 3] = [4, 5, 6];
    println!("{}", arrayi[2]);

    // Aula 12 vectors
    let mut vectors = vec![1, 2, 3];
    vectors.push(4);
    println!("{:?}", vectors);
    vectors.pop();
    println!("{:?}", vectors);
    let mut vec_new = Vec::new();
    vec_new.push("test");
    vec_new.push("String");
    println!("{:?}", vec_new);
    vec_new.reverse();
    println!("{:?}", vec_new);
    // diferente do array e tuple, vector pode aumentar de tamanho
    let vect = Vec::<i32>::with_capacity(3);
    println!("{}", vect.capacity());
    let v: Vec<i32> = (0..5).collect();
    println!("{:?}", v);

    // Aula 14 - slice
    let slice_v: &[i32] = &v[2..4];
    println!("{:?}", slice_v);

    // Aula 15 - String &str
    let name = String::from("Pedro");
    let course = "Rust".to_string();
    let new_name = name.replace("Pedro", "Pedrão");

    println!("{name}");
    println!("{course}");
    println!("{new_name}");
    // &str = 'String slice' or stir, pode ser String ou String literal
    // não aloca na HEAP
    let str1 = "hello"; // é uam &str
    println!("{str1}");

    // Aula 16 - String literals
    // quando não quer valores UTF-8
    let string_literals = "\x52\x75\x73\x74"; //escreve Rust
    println!("{string_literals}");

    print_phrase("Imprime o argumento"); // chama função aula 17
    control_flow(); //chama função aula 18
}

// Aula 17 - functions
fn print_phrase(phrase: &str) {
    println!("Imprime função");
    println!("{}", phrase);
    println!("{phrase}");
    println!("gcd = {}", gcd(20, 5));
    println!("{}", multiple_return_values(true))
}
fn gcd(mut a: u64, mut b: u64) -> u64 {
    while a != 0 {
        if a < b {
            let c = a;
            a = b;
            b = c;
        }
        a = a % b;
    }
    b
}

fn multiple_return_values(flag: bool) -> bool {
    if flag == true {
        true
    } else {
        false
    }
}

// Aula 18 - control flow
fn control_flow() {
    let one = 1;

    if one > 10 {
        println!("true");
    } else if one == 1 {
        println!("Equal");
    } else {
        println!("False");
    }

    let mut num = 0;
    'counter: loop {
        println!("Count: {}", num);
        let mut decrease = 5;
        loop {
            println!("Decreasing: {}", decrease);
            if decrease == 4 {
                break;
            }
            if num == 2 {
                break 'counter;
            }
            decrease -= 1
        }
        num += 1
    }

    let mut numero = 0;
    while numero <= 5 {
        println!("Numero: {}", numero);
        numero += 1;
    }

    let elements: Vec<u8> = (0..10).collect();
    for i in elements {
        println!("{}", i);
    }
    for i in (1..4).rev() {
        println!("{}", i);
    }
    println!("TERMINOU!");
}
