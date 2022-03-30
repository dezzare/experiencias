use std::cell::RefCell;
use std::rc::Rc;

struct Flagger {
    is_true: RefCell<bool>,
}

fn main() {
    // pointer mais comum é uma reference &
    // smart pointers = box, ref
    // box aloca na HEAP, ao invés na stack
    let a = (12, "eggs"); // created on the stack
    let b = Box::new(a); //created on the heap, but stored on the stack
    println!("{:?}", b);

    let x = 5;
    let y = &x;

    assert_eq!(5, x);
    assert_eq!(5, *y); // y está alocado na heap, * desaloca p/ poder ser comparado

    let x = 5;
    let y = Box::new(x);
    assert_eq!(5, x);
    assert_eq!(5, *y);

    // há momentos que o valor precisa de multiplos owners
    // exemplo de graphs
    // rc
    // arch - qdo compartilhar pointers entre threads
    let s1 = Rc::new(String::from("Pointer"));
    let s2 = s1.clone();
    let s3 = s2.clone();
    // s1, s2, s3 são pointers alocados na HEAD, apontando p/ string alocada na stack
    // ainda possível usar methods de string
    println!("{}, {}, {}", s1.contains("Point"), s2, s3.contains("ter"));

    // RefCell = interior mut
    // unsafe code
    // refcell dá acesso a dois methods: borrow e borrow mut
    let flag = Flagger {
        is_true: RefCell::new(true),
    };
    // borrow returns Ref<T>
    // borrow_mut return RefMut<T>
    // let reference = flag.is_true.borrow();
    let reference = Rc::new(flag.is_true.clone());
    println!("{:?}", reference);
    let mut reference_mut = flag.is_true.borrow_mut();
    // vai causar panic IN RUN TIME, se  let reference falg.borrow não estivr comentada
    *reference_mut = false; // derefence first to access inside
    println!("{}", reference_mut);
}
