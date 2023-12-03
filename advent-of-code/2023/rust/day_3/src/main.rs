const SCHEMATIC_SIZE: usize = 140;

type EngineSchematic = [[char; SCHEMATIC_SIZE]; SCHEMATIC_SIZE];

fn main() {
    let file = include_str!("../input.txt");
    let engine_schematic = parse_engine_schematic(file);

    let res = get_part_number_sum(engine_schematic);

    dbg!(res);
}

fn get_part_number_sum(engine_schematic: EngineSchematic) -> u32 {
    engine_schematic
        .iter()
        .enumerate()
        .fold(0, |acc, (row, line)| {
            let mut sum = 0;
            let mut num = 0;
            let mut is_part = false;

            for (col, character) in line.iter().enumerate() {
                if character.is_ascii_digit() {
                    if !is_part {
                        is_part = check_is_part(row, col, &engine_schematic);
                    }

                    num *= 10;
                    num += character.to_digit(10).unwrap();
                } else {
                    if is_part {
                        sum += num;
                    }

                    is_part = false;
                    num = 0;
                }
            }
            if is_part {
                sum += num;
            }
            sum + acc
        })
}

fn check_is_part(row: usize, col: usize, engine_schematic: &EngineSchematic) -> bool {
    let directions: [[i32; 2]; 9] = [
        [-1, 0],
        [-1, 1],
        [-1, -1],
        [0, 0],
        [0, 1],
        [0, -1],
        [1, 0],
        [1, 1],
        [1, -1],
    ];

    directions
        .iter()
        .map(|[row_delta, col_delta]| {
            [
                i32::try_from(row).unwrap() + row_delta,
                i32::try_from(col).unwrap() + col_delta,
            ]
        })
        .filter(|[row, col]| {
            *row >= 0
                && *row < SCHEMATIC_SIZE.try_into().unwrap()
                && *col >= 0
                && *col < SCHEMATIC_SIZE.try_into().unwrap()
        })
        .any(|[row, col]| {
            let character = engine_schematic[row as usize][col as usize];

            !(character.is_ascii_digit() || character == '.')
        })
}

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
