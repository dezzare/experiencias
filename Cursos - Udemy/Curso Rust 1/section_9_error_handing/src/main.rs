use std::fs::rename;
use std::fs::File;
use std::io::Error;
use std::io::ErrorKind;
fn main() {
    // 2 categorias recuperáveis e irrecuperáveis
    // panic!("main thread panic!");
    // let vec = vec![1];
    // vec[10];

    // backtrace = ordem recursiva para lidar com o panic

    // abort não causa o fim do programa
    // result ajuda a lidar com o erro
    // result = enum
    let file = File::open("erro.txt");
    // enum Result<T, E> {
    //     Ok(T),
    //     Err(E),
    // }
    let file = match file {
        Ok(file) => file,
        //        Err(error) => panic!("Error: {:?}", error)
        Err(error) => match error.kind() {
            ErrorKind::NotFound => match File::create("error.txt") {
                Ok(file_created) => file_created,
                Err(err) => panic!("Cannont create the file!"),
            },
            _ => panic!("It was some otherr error kind"),
        },
    };
    let file2 = File::open("error2.txt").unwrap(); // unwrap chama panic
    let file3 =; File::open("error3.txt").expect("Error opening the file!");

}

fn open_file() -> Result<File, Error> {
    let file =  File::open("error.txt")?; // ? propagfa o erro
    Ok(file)
}

fn rename_file() -> Result<(), Error> {
    let file = rename("error.txt", "erro_renamed.txt")?;
    Ok(file)
}
