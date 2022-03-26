fn main() {

    let mut id: Vec<u8> = vec![0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    fn is_connected(p: usize, q: usize, f: &mut Vec<u8>) -> bool {
        let mut id = f;
        root(p, &mut id) == root(q, &mut id)

    }

    fn root(mut i: usize, f: &mut Vec<u8>) -> u8 {
        let id = f;
        while i != id[i].into() {
            i = id[i].into();
        }
        id[i]
    }

    fn quick_union(p: usize, q: usize, f: &mut Vec<u8>) {
        let mut id = f;
        let i = root(p, &mut id) as usize;
        let j = root(q, &mut id);
        id[i] = j;

    }

    println!("ID = {:?}", id);
    println!("Is 4 5 connected? = {:?}", is_connected(4, 5, &mut id));
    println!("Union 4-5, 9-8, 1-3, 2-3");
    quick_union(4, 5, &mut id);
    quick_union(9, 8, &mut id);
    quick_union(1, 3, &mut id);
    quick_union(2, 3, &mut id);
    println!("ID = {:?}", &id);
    println!("Is 1 2 connected? {:?}", is_connected(1, 2, &mut id));

}
