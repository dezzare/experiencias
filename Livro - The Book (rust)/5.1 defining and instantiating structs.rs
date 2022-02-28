// Similar a tuples
// contém valores de diversos tipos
// difere da tupla: structs todos valores são nomeados
//  cada nomes / tipos = fields

struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
}


//não é necessário declarar na mesma ordem
fn main(){
    let mut user1 = User { //Nào é possível setar apenas um field como mutável, deve ser toda a instância
        email: String::from("someone@exemple.com"),
        username: String::from("usrename123"),
        active: true,
        sign_in_count: 1,
    };

    user1.email = String::from("outroemail@exemplo.com")

    let user2 = User {
        active: user1.active,
        username: user1.username,
        email: String::from("another@exemple.com"),
        sign_in_count: user1.sign_in_count,
    }

    let user3 = User {
        email: String::from("mais@exemplo.com"),
        ..user2
    };

}


fn build_user(email: String, username: String) -> User {
    User {
        email, //pode ser omitido "email: " por ter a mesma sintaxe
        username,
        active: true,
        sign_in_count: 1,
    }
}


// Tuple Struc

struct Color(i32, i32, i32);
struct Point(i32, i32, i32);

fn tuple_struct() {
    let black = Color(0, 0, 0);
    let origin = Point(0, 0, 0);
}
