fn main() {
    // Aula 27 - Structs

    // name field struct não importa ordem
    struct User {
        active: bool,
        username: String,
        sign_in_count: u32,
    }

    // tuple struct, ordem importa
    struct Coordinates(i32, i32, i32);

    // Unit Struct
    struct UnitStruc;

    fn structs() {
        let user1 = User {
            active: true,
            username: String::from("Pedro"),
            sign_in_count: 0,
        };
        println!("{}", user1.username);

        let user2 = build_user(String::from("Pedro2"));
        println!("{}", user2.username);

        let coords = Coordinates(1, 2, 3);
    }

    fn build_user(username: String) -> User {
        User {
            username,
            active: true,
            sign_in_count: 1,
        }
    }
    structs();

    // Aula 28 - Methods
    struct Square {
        width: u32,
        height: u32,
    }

    // implementa method
    impl Square {
        fn area(&self) -> u32 {
            // valor sempre &self
            self.width * self.height
        }
        fn largura(&self) -> u32 {
            println!("{}", self.width);
            self.width
        }
        fn mut_width(&mut self, new_width: u32) {
            self.width = new_width;
        }
    }

    fn methodos() {
        let quadrado = Square {
            width: 5,
            height: 5,
        };
        println!("{}", quadrado.area());
        println!("largura = {}", quadrado.largura());

        let mut quadrado_mut = Square {
            width: 5,
            height: 5,
        };
        println!("mut width = {}", quadrado_mut.width);
        quadrado_mut.mut_width(10);
        println!("mut width = {}", quadrado_mut.width);
    }
    methodos();

    // Aula 29-31 Lifetimes

    struct MyString<'a> {
        text: &'a str,
    }

    fn lifetime() {
        let str1 = String::from("Thist is my string");
        let x = MyString {
            text: str1.as_str(),
        };
        let s: &'static str = "I have a static lifetime";
        println!("x = {}, s = {}", x, s)
    }
    lifetime();
}
