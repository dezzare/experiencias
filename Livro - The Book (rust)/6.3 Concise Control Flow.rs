// combinação de if e let para lidar com um padrão
// opção com match
let config_max = Some(3u8);
match config_max {
    Some(max) => println!("máximo configruado para: {}", max),
    _ => (), //requisito do match = valor none
}
// rewrite com if let
let config_max = Some(3u8);
if let Some(max) = config_max {
    println!("máximo configurado para: {}", max);
} //assim é menos verbos, mas perde a checkagem exaustiva do match


//outro exemplo (modelo do topico anterior)
let mut count = 0;
match coin {
    Coin::Quarter(state) => println!("State quarteer from {:?}", state);,
    _ => count += 1,
}
//rewrite com if let else
let mut count = 0;
if let Coin::Quarter(state) = coin {
    println!("State quarter from {:?}!", state);
} else {
        count += 1;
}

