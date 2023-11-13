pub fn get_position(text: String) -> (i32, i32) {
    text.lines()
        .map(|line| line.split(' '))
        .map(|mut line| {
            if let (Some(direction), Some(magnitude)) = (line.next(), line.next()) {
                (direction, magnitude.parse::<i32>().unwrap())
            } else {
                unreachable!()
            }
        })
        .fold(
            (0, 0),
            |(horizontal, depth), (direction, magnitude)| match direction {
                "down" => (horizontal, depth + magnitude),
                _ => unreachable!(),
            },
        )
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn down_should_increase_depth() {
        assert_eq!(get_position("down 5".to_owned()), (0, 5));
    }
}
