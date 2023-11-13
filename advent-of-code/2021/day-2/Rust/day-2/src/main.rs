use std::fs;

// start 12:10
// read file (they are relative to src) 12:23
fn main() {
    let instructions = fs::read_to_string("../../input.txt").unwrap();

    dbg!(&instructions);
}
