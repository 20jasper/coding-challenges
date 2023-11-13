fn parse_instructions(text: &str) -> Vec<(&str, i32)> {
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
        .collect::<Vec<(&str, i32)>>()
}

pub fn get_position(text: String) -> (i32, i32, i32) {
    parse_instructions(&text).iter().fold(
        (0, 0, 0),
        |(horizontal, depth, aim), (direction, magnitude)| match *direction {
            "down" => (horizontal, depth, aim + magnitude),
            "up" => (horizontal, depth, aim - magnitude),
            "forward" => (horizontal + magnitude, depth + aim * magnitude, aim),
            _ => unreachable!(),
        },
    )
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn down_should_increase_aim() {
        assert_eq!(get_position("down 5".to_owned()), (0, 0, 5));
    }

    #[test]
    fn up_should_decrease_aim() {
        assert_eq!(get_position("up 5".to_owned()), (0, 0, -5));
    }

    #[test]
    fn forward_should_increase_horizontal() {
        assert_eq!(get_position("forward 5".to_owned()), (5, 0, 0));
    }

    #[test]
    fn forward_and_positive_aim_increases_depth() {
        assert_eq!(
            get_position("forward 5\ndown 5\nforward 5".to_owned()),
            (10, 25, 5)
        );
    }
}
