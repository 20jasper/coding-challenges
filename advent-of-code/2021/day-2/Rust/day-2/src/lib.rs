pub fn get_position(instructions: String) -> (i32, i32) {
    let lines = instructions.lines().map(|line| line.split(' '));

    for mut line in lines {
        if let (Some(direction), Some(magnitude)) = (line.next(), line.next()) {
            dbg!(&direction, &magnitude);
        };
    }

    (0, 0)
}
