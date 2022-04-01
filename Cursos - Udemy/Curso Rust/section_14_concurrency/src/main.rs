use std::alloc::handle_alloc_error;
use std::sync::mpsc;
use std::sync::Arc;
use std::sync::Mutex;
use std::thread;
use std::time::Duration;

fn main() {
    std::thread::spawn(move || {
        println!("Hello from a thread!");
    });

    // faz thread principal dormir 1sec, dar tempo da thread criada ser executada
    thread::sleep(Duration::from_secs(1));

    // outra forma de cosneugir executar sem usar o sleep
    let handle = std::thread::spawn(move || {
        println!("Olá de outra thread");
    });
    handle.join().unwrap();
    println!("Olá da MAIN thread");

    let v = vec![1, 2, 3];
    // move (closure) que pega ownership p/ poder rodar
    let closure_take_owner_v = std::thread::spawn(move || {
        println!("{:?}", v);
    });

    let v2 = vec![1, 2, 3, 4];
    let mut thread_dandles = Vec::new();
    for e in v2 {
        // threads podem terminar em ordem variada
        thread_dandles.push(thread::spawn(move || println!("Thread {}", e)));
    }

    println!("Main thread");
    for handle in thread_dandles {
        handle.join().unwrap();
    }
    channel();
    shared_state();
}

fn channel() {
    // canal de transmissão
    // mpsc - multi producer, single consumer
    // mensagens são colocadas em queue
    let (transmitter, receiver) = mpsc::channel();

    let value = String::from("string transmitida");
    std::thread::spawn(move || {
        transmitter.send(value).unwrap();
    });

    let msg = receiver.recv().unwrap();
    println!("{}", msg);

    // mais de um transmitter
    // tamanho máximo da fila;
    let (transmitter2, receiver2) = mpsc::sync_channel(1000);
    let transmitter2_clone = transmitter2.clone();

    std::thread::spawn(move || {
        let vec2 = vec![
            String::from("Transmitting"),
            String::from("from"),
            String::from("Original"),
        ];
        for val in vec2 {
            transmitter2.send(val).unwrap();
        }
    });

    std::thread::spawn(move || {
        let vec2 = vec![
            String::from("Clone"),
            String::from("is"),
            String::from("transmitting"),
        ];
        for val in vec2 {
            transmitter2_clone.send(val).unwrap();
        }
    });

    for rec in receiver2 {
        println!("{}", rec);
    }
    send_and_sync()
}

fn send_and_sync() {
    // se for Rc::new = erro, não pode passar owner entre threads
    // Arc = atomic reference counter
    let rc1 = Arc::new(String::from("teste"));
    let rc2 = rc1.clone();
    std::thread::spawn(move || {
        rc2;
    });
}

fn shared_state() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..9 {
        let counter = Arc::clone(&counter);
        let handle = std::thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            //cria uma dead lock:
            // let mut num2 = counter.lock().unwrap();

            *num += 1;
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap()
    }

    println!("{}", counter.lock().unwrap());
    poison_mutex();
}

fn poison_mutex() {
    let lock = Arc::new(Mutex::new(0));
    let lock2 = Arc::clone(&lock);

    let _ = std::thread::spawn(move || -> () {
        let _guard = lock2.lock().unwrap(); //adquire a lock
        panic!(); //mutex agora está envenenada
    })
    .join();

    // recupera do panic
    let mut guard = match lock.lock() {
        Ok(guard) => guard,
        Err(poisoned) => poisoned.into_inner(),
    };
    *guard += 1;
    println!("Imprime poisoned: {:?}", guard);
}

// fn factorial(num: u32) -> BigUint {
//adicionar nas dependencias:
// raion = "1"
// num = "0.4"
// use rayon::prelude::*;
// use num::{BigUint, one};
// use std::time::Instant;
// if num ==0 || num ==1 {
//     return BigUint::one()
// } else {
//     (1..=num).map(BigUint::from).reduce(|acc, x| acc * x).unwrap()
// }
// }
// faz factorial em multiplos threads
// fn mult_factorial(num: u32) -> BigUint {
// if num ==0 || num ==1 {
//     return BigUint::one()
// } else {
//      (1..=num).into_par_iter().map(BigUint::from).reduce(|| BigUint::one(), |acc, x| acc * x).unwrap()
//}
//
// into_par_iter() = into paralel
// benchmark:
// let now = Instant::now();
// factorial(50000);
// println!("{:.2?}", now.elapser());
// let now = Instant::now();
// multi_factorial(50000);
// println!("{:.2?}", now.elapser());
// no exemplo, fac = 4seg e o multi = 100ms
