fn main() {
    let isc1 = is_connected(2, 3, quick_find(10));
    println!("Are 2 and 3 connected? {:?}", isc1);
    let unn = union(2, 3, quick_find(10));
    println!("Depois Union = {:?}", unn);
    let isc2 = is_connected(2, 3, union(2, 3, quick_find(10)));
    println!("Are 2 and 3 connected? {:?}", isc2);
}

fn quick_find(n: u8) -> Vec<u8> {
    let mut id: Vec<u8> = vec![];
    for i in 0..n {
        id.push(i);
    }

    id
}

fn is_connected(p: usize, q: usize, f: Vec<u8>) -> bool {
    let id = f;
    id[p] == id[q]
}

fn union(p: usize, q: usize, f: Vec<u8>) -> Vec<u8> {
    let mut id = f;
    let pid = id[p];
    let qid = id[q];
    println!("Antes Union = {:?}", id);

    for i in 0..id.len() {
        if id[i] == pid {
            id[i] = qid;
        }
    }
    id
}
