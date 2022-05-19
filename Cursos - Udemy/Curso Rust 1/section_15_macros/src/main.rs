macro_rules! gcd {
    ($a: expr, $b: expr) => {{
        let mut m = $b;
        let mut n = $a;

        while m != 0 {
            if m < n {
                let t = m;
                m = n;
                n = t;
            }
            m = m % n;
        }
        n
    }};
}

fn main() {
    // macros metaprogramming
    gcd!(14, 15);
    println!("{}", gcd!(14, 15));
}
