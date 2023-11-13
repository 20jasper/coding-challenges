pub fn get_position(text: String) -> (i32, i32) {
    text.lines()
        .map(|line| line.split(' '))
        .map(|mut line| {
            if let (Some(direction), Some(magnitude)) = (line.next(), line.next()) {
                (
                    direction,
                    magnitude
                        .parse::<i32>()
                        .expect("invalid input, {magnitude} is not a number"),
                )
            } else {
                panic!("Invalid input! not enough words on a line");
            }
        })
        .fold(
            (0, 0),
            |(horizontal, depth), (direction, magnitude)| match direction {
                "down" => (horizontal, depth + magnitude),
                "up" => (horizontal, depth - magnitude),
                "forward" => (horizontal + magnitude, depth),
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

    #[test]
    fn up_should_decrease_depth() {
        assert_eq!(get_position("up 5".to_owned()), (0, -5));
    }

    #[test]
    fn forward_should_decrease_depth() {
        assert_eq!(get_position("forward 5".to_owned()), (5, 0));
    }

    #[test]
    fn works_with_multiple_instructions() {
        assert_eq!(get_position("forward 5\ndown 5".to_owned()), (5, 5));
    }
}
