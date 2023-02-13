use std::fs;

fn main() {
	let file_path = "inputt.txt";

	let input = match fs::read_to_string(file_path) {
		Ok(string) => string,
		Err(e) => panic!("couldn't read {file_path}: {e}"),
	};

	println!("{input}");
}
