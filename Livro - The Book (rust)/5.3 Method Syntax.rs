// fn dentro de struct(enum or trait object
// primeiro parâmetro e sempre 'self'
// impl = Associated Functions

#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width *self.height
    }
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };
    println!(
        "The area of the rectangle is  {} sqaures pixels.",
        rect1.area()
    );
}


/////////////////////////////////////////////////////////
//  Possível usar o mesmo nome do method com o do field:
/////////////////////////////////////////////////////////
impl Rectangle {
    fn widt(&self) -> bool {
        self.width > 0
    }
}

fn main() {
    let rect2 = Rectangle {
        width: 30,
        height: 50,
    };

    //Method não precisa de '->'
    // rust automaticamente adiciona '&', '&mut' ou '*' matches the signature method
    if rec2.width() {
        println!("The rectangle ha a nonzero width; it is {}", rect2.width);
    }
}



////////////////////////////////
// Methods with More Parameters
////////////////////////////////
impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }

    fn can_hold(&self, &other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };
    let rect2 = Rectangle{
        width: 10,
        height: 40,
    };
    let rect3 = Rectangle {
        width: 60,
        height: 45,
    };

    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));
    println!("Can rect1 hold rect3? {}", rect1.can_hold(&rect3));
}

// Associated Functions
// implementando um cosntructor
// sem self, posi precisa de valores externos
impl Rectangle {
    fn square(size: u32) -> Refctangle {
        Rectangle {
            width: size,
            height: size,
        }
    }
}
//é chamada com uso de '::'
let sq = Rectangle::square(3);
