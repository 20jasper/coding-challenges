type EngineSchematic = [[char; 140]; 140];

fn main() {
    let file = include_str!("../input.txt");
    let engine_schematic = parse_engine_schematic(file);

    dbg!(engine_schematic);

    println!("Hello, world!");
}

fn get_part_numbers(engine_schematic: EngineSchematic) {}

fn parse_engine_schematic(file: &str) -> EngineSchematic {
    iter_to_array(file.lines().map(str::chars).map(iter_to_array))
}

fn iter_to_array<Element, const N: usize>(mut iter: impl Iterator<Item = Element>) -> [Element; N] {
    // Here I use `()` to make array zero-sized -> no real use in runtime.
    // `map` creates new array, which we fill by values of iterator.
    let res = [(); N].map(|_| iter.next().unwrap());

    assert!(iter.next().is_none());

    res
}
