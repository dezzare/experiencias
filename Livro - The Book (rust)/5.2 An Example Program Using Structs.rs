// Rectangles

//fn main() {
//    let width1 = 30;
//    let height1 = 50;
//
//    println!(
//        "The are of the rectangle is {} square pixels.",
//        area(width1, geight1)
//    );
//}
//
//fn area(width: u32, height: u32) -> u32 {
//    width * height
//}


// Refatorando com tuplas
// fica menos legível, mas envia apenas um parâmetro
//fn main() {
//    let rect1 = (30, 50);
//
//    println!(
//        "The area of the rectangle is {} square picels.",
//        area(resct1)
//        );
//}
//
//fn area(dimensions: (u32, u32)) -> u32 {
//    dimensions.0 * dimensions.1
//}

//Refatorando com structs
//da mais significado
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    println!(
        "The area of the rectangle [e {} square pixels.]",
        area(&rect1)
    );
}

fn area(rectangle: &Rectangle) -> u32 {
    rectangle.width * rectangle.height
}
