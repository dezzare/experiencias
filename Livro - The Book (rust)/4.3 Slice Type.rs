// Slice faz referência a elementos de uma coleção
// tipo de referência, NÃO tem ownership


// String Slice:
let s = String::from("hello world");

let hello1 = &s[0..5];
let hello2 = &s[..5]; //iniciar do 0 pode omitir
let world1 = &s[6..11];
let world2 = &s[6..]; //terminar no último, pode omitir o número;


let len = s.len();
let hw1 = &s[0..len];
let hw2 = &s[..];


// "string slice" = &str

fn first_world(s: &String) -> &str {
    let bytes = s.as_bytes();

    for(i, &item) in bytes.iter().enumerate() {
        if item ==b' ' {
            return &s[0..i];
        }
    }

    &s[..];
}

// String Slice = String Literal
// &str = immutable reference
// &str specific point of the binary
//
// mais experientes escrevem a fn acima como:
// fn first_world(s: &str) -> &str{
// permite usar a mesma função em valores &String e &str;
