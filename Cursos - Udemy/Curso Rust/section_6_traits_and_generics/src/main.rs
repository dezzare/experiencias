use std::fmt::Display;

fn main() {
    struct Point<T, U> {
        //Generics sãoi place holders até colocar o valor
        x: T,
        y: U,
    }

    // Traits representam uma capacidade, algo que se pode fazer
    // comportamentos compartilhados

    trait Overview {
        fn overview(&self) -> String {
            String::from("Implementação default")
        }
    }

    struct Course {
        headline: String,
        author: String,
    }

    struct AnotherCourse {
        headline: String,
        author: String,
    }

    impl Overview for Course {
        fn overview(&self) -> String {
            format!("{}, {}", self.author, self.headline)
        }
    }
    impl Overview for AnotherCourse {}

    impl Drop for Course {
        fn drop(&mut self) {
            println!("Dropping {}", self.author)
        }
    }

    trait Clone: Sized {
        fn clone(&self) -> Self;
        fn clone_from(&mut self, source: &Self) {
            *self = source.clone()
        }
    }

    fn generics() {
        let coord1 = Point { x: 5.0, y: 5.0 };
        let coord2 = Point { x: 'x', y: 5.0 }; // 5.0 graças ao <U> em point
                                               // println!("{}, {}", coord1, coord2);
        let course1 = Course {
            headline: String::from("Headline1"),
            author: String::from("Autor 1"),
        };
        let course2 = AnotherCourse {
            headline: String::from("Headline2"),
            author: String::from("Autor 2"),
        };

        println!("{}", course1.overview());
        println!("{}", course2.overview()); // vai pegar impl default
        call_overview1(&course1);
        call_overview1(&course2);

        drop(course1);

        // call_overview2(&course1);
        call_overview2(&course2);
    }
    generics();

    // POSSIBILITA item/chamada ser de tipos diferentes
    fn call_overview1(item: &impl Overview) {
        println!("Call Overview1: {}", item.overview());
    }
    // OBRIGA item/chamadas serem do mesmo tipo
    fn call_overview2<T: Overview>(item: &T) {
        println!("Call Overview2: {}", item.overview());
    }
    // PERMITE múltiplos Traits
    // fn call_overview3(item: &impl Overview + AnotherCourse){}
    // PERMITE múltiplos Traits, obriga serem do mesmo tipo.
    // fn call_overview4<T: Overview + AnotherCourse>(item1: &T, item2: &T)
}
