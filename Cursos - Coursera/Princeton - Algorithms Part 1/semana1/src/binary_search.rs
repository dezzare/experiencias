fn testes() {
    let vec: Vec<i32> = vec![1, 2, 4, 6, 8, 10, 13, 23, 34, 43, 54, 55, 62];
    println!("vec = {:?}", vec);
    let resultado = binary_search(vec, 8);
    println!("Posição: {:?}", resultado);
}

fn binary_search(arr: Vec<i32>, key: i32) -> usize {
    let mut lo = 0;
    let mut hi = arr.len();
    let mut retorno = 0;
    while lo <= hi {
        let mid = lo + (hi - lo) / 2;
        if key < arr[mid] {
            hi = mid - 1;
        } else if key > arr[mid] {
            lo = mid + 1;
        } else {
            retorno = mid;
            return mid;
        }
    }
    return retorno;
}

fn main() {
    testes();
}
