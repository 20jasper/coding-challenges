use std::fs;

fn main() {
	let file_path = "input.txt";

	let calories_list = read_file(file_path);

	println!("{}", get_max_calories(calories_list));
}

fn read_file(file_path: &str) -> String {
	match fs::read_to_string(file_path) {
		Ok(string) => string,
		Err(e) => panic!("couldn't read {file_path}: {e}"),
	}
}

fn get_max_calories(calories_list: String) -> i32 {
	let mut max = 0;

	let mut sum = 0;
	for item in calories_list.lines() {
		// if we move onto a new elf
		if item.is_empty() {
			max = sum;
			sum = 0;
			continue;
		}
		match item.parse::<i32>() {
			Ok(calories) => sum += calories,
			Err(_) => panic!("could not parse string slice '{item}' to an i32"),
		};
	}

	max
}

#[cfg(test)]
mod tests {
	use crate::{get_max_calories, read_file};

	#[test]
	fn should_read_from_file() {
		let expected_input = "2621\n4136\n";
		let input = read_file("test_input.txt");

		assert_eq!(input, expected_input)
	}

	#[test]
	fn should_sum_one_elfs_calories() {
		let input = "1\n2\n\n".to_owned();

		assert_eq!(get_max_calories(input), 3);
	}

	#[test]
	fn should_get_the_max_from_two_elves_calories() {
		let input = "1\n7\n\n5".to_owned();

		assert_eq!(get_max_calories(input), 8);
	}
}
