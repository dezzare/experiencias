fn main() {
    enum Pet {
        dog,
        cat,
        fish,
    }

    impl Pet {
        fn what_am_i(self) -> &'static str {
            match self {
                Pet::dog => "I am a dog",
                Pet::cat => "I am a cat",
                Pet::fish => "I am a fish",
            }
        }
    }

    enum IpAddrKind {
        V4(String),
        V6,
    }

    struct IpAddr {
        kind: IpAddrKind,
        address: String,
    }

    fn enums() {
        let dog = Pet::dog;
        println!("{}", dog.what_am_i());

        let home = IpAddrKind::V4(String::from("127.0.0.1"));

        let loopack = IpAddr {
            kind: IpAddrKind::V6,
            address: String::from("::1"),
        };

        let some_number = Some(5);
        let some_string = Some("a string");
        let nothing: Option<i32> = None;

        let x: i32 = 5;
        let y: Option<i32> = Some(5);
        // let sum = x + y; não funciona, nao pode ter i32 p/ Option<i32>

        // automático
        // enum Option<T> {
        //     None,
        //     Some(T),
        // }
        let five = Some(5);
        let six = plus_one(five);
        let none = plus_one(None);
        println!("{:?}", five);
        println!("{:?}", six);
        println!("{:?}", none);

        fn plus_one(x: Option<i32>) -> Option<i32> {
            match x {
                None => None,
                Some(i) => Some(i + 1),
            }
        }

        what_pet("Dog");
        what_pet("Cat");
        what_pet("Cow");

        fn what_pet(input: &str) {
            match input {
                "Dog" => println!("Eu tenho um cachorro!"),
                "Cat" => println!("Eu tenho um gato!"),
                "Fish" => println!("Eu tenho um peixe"),
                _ => println!("Nào tenho ideia que bicho é esse."),
            }
        }

        // IF / LET = match p/ 1 pattern
        let dog2 = Some(Pet::dog);
        if let Some(Pet::dog) = dog2 {
            println!("É um cachorro!");
        } else {
            println!("Não é um cachorro.");
        }
    }
    enums();
}
