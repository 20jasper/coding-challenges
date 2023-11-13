use std::fs;

use day_2::try_get_position;

use anyhow::Result;

// start 12:10
// read file (they are relative to src) 12:23
// split magnitude and direction 12:35
// done part 1 12:54
// done part 2 12:58
// refactor 1:06
// total time 0:54
fn main() -> Result<()> {
    let instructions = fs::read_to_string("../../input.txt")?;

    let (horizontal, depth, _) = try_get_position(instructions)?;

    println!("answer: {}", horizontal * depth);

    Ok(())
}
