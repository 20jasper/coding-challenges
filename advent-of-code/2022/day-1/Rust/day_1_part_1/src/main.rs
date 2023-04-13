use std::fs;

fn main() {
	let file_path = "input.txt";

	let input = read_file(file_path);
	println!("{input}");
}

fn read_file(file_path: &str) -> String {
	match fs::read_to_string(file_path) {
		Ok(string) => string,
		Err(e) => panic!("couldn't read {file_path}: {e}"),
	}
}

#[cfg(test)]
mod tests {
	use crate::read_file;

	#[test]
	fn should_read_from_file() {
		let expected_input = "2621\n4136\n";
		let input = read_file("test_input.txt");

		assert_eq!(input, expected_input)
	}
}
