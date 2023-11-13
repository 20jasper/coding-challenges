use std::fs;

use day_2::get_position;

// start 12:10
// read file (they are relative to src) 12:23
// split magnitude and direction 12:35
// done part 1 12:54
fn main() {
    let instructions = fs::read_to_string("../../input.txt").unwrap();

    let (horizontal, depth) = get_position(instructions);

    println!("answer: {}", horizontal * depth);
}
