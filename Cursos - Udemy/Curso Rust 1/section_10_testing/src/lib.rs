#[cfg(test)]
mod tests {
    use super::*; // faz pegar fn fora do scopo

    #[test] //deve ser incluído para mostrar que é um teste
    fn it_works_eq() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }

    #[test]
    fn it_works_ne() {
        let result = 2 + 2;
        assert_ne!(result, 5);
    }

    #[test]
    // #[ignore] // para não executar e aparecer erro
    #[should_panic]
    fn it_fails() {
        panic!("Test failed!");
    }

    #[test]
    fn call_simple_add() {
        assert!(simple_add(true));
    }
}

fn simple_add(_a: bool) -> bool {
    if 2 + 2 == 4 {
        true
    } else {
        false
    }
}
