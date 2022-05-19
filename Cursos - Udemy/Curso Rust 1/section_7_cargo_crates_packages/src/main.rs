// Packages = build, test, share Crates
// Crates = tree of modules = lib ou exe
// Modules = control the organization, scope and privacy of paths
// Paths = jeito de chamar algum item (struct, function ou módulo)

// pub deixa o modulo público
pub mod list {

    struct Tasks {
       pub item: String, // pub necessário para poder usar este field
    }

    mod things_todo {
        fn add_activity() {}
        fn update_activity() {}
        fn marked_completed() {}
    }

    mod items_completed {
        fn remove_task() {}
        fn move_back_todo() {}
    }
}
// cargo install cargo-modules
// cargo  modules generate tree // mostra apenas os 2 mod
// cargo modules generate tree --with-types //assim dá pra ver as funções dentro do modulo


// usa o modulo:
fn lets_add_task() {
    let task = list::Tasks (item: String::from("Tasks"));
    list::things_todo::add_activity(); // não consegue acessa pq não está "thing_todo"pub
    crate::list::things_todo::add_activity(); //consegue por usar path absoluto


    // se criar um arquivo com o nome things_todo.rs e passar somentes as funções
    mod things_todo;
    use crate::things_todo::add_activity;
    //assim é possível usar apenas a função, sem o path relativo/absoluto
    add_activity();


    // possível criar submodulos 
    // adicionando um arquivo com o nome do submodulo
    // dentro da pasta com o nome do modulo a qual pertence
    // tem que referenciar o nome do submodulo no arquivo do modulo apenas
    use things_todo::items_completed;
    items_completed::remove_task();

}



