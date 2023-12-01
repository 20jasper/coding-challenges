use day_1::parse_calibration_value;

fn main() {
    let file = include_str!("../input.txt");

    let sum: u64 = file.lines().map(parse_calibration_value).sum();

    println!("{}", sum);
}
