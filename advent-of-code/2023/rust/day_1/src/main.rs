use anyhow::{Ok, Result};
use day_1::parse_calibration_value;

fn main() -> Result<()> {
    let file = include_str!("../input.txt");

    let sum = file
        .lines()
        .enumerate()
        .map(parse_calibration_value)
        .try_fold(0, |acc, val| Ok(val? + acc))?;

    println!("{}", sum);

    Ok(())
}
