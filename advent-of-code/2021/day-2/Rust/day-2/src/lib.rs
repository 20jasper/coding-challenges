use anyhow::{anyhow, Context, Result};

/// A direction and a magnitude
enum Instruction {
    Down(i32),
    Up(i32),
    Forward(i32),
}

fn try_parse_instruction(instruction: Option<(&str, &str)>) -> Result<Instruction> {
    let (direction, magnitude) = instruction.context("Error parsing instruction")?;

    let magnitude = magnitude
        .parse::<i32>()
        .context("Could not parse magnitude {magnitude}")?;

    match direction {
        "down" => Ok(Instruction::Down(magnitude)),
        "up" => Ok(Instruction::Up(magnitude)),
        "forward" => Ok(Instruction::Forward(magnitude)),
        _ => Err(anyhow!("Invalid direction: {direction}")),
    }
}

fn try_parse_instructions(text: &str) -> impl Iterator<Item = Result<Instruction>> {
    text.lines()
        .map(|line| line.split_once(' '))
        .map(try_parse_instruction)
}

pub fn try_get_position(text: String) -> Result<(i32, i32, i32)> {
    Ok(
        try_parse_instructions(&text)?.fold((0, 0, 0), |(horizontal, depth, aim), instruction| {
            match instruction {
                Instruction::Down(magnitude) => (horizontal, depth, aim + magnitude),
                Instruction::Up(magnitude) => (horizontal, depth, aim - magnitude),
                Instruction::Forward(magnitude) => {
                    (horizontal + magnitude, depth + aim * magnitude, aim)
                }
            }
        }),
    )
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn down_should_increase_aim() {
        assert_eq!(try_get_position("down 5".to_owned()).unwrap(), (0, 0, 5));
    }

    #[test]
    fn up_should_decrease_aim() {
        assert_eq!(try_get_position("up 5".to_owned()).unwrap(), (0, 0, -5));
    }

    #[test]
    fn forward_should_increase_horizontal() {
        assert_eq!(try_get_position("forward 5".to_owned()).unwrap(), (5, 0, 0));
    }

    #[test]
    fn forward_and_positive_aim_increases_depth() {
        assert_eq!(
            try_get_position("forward 5\ndown 5\nforward 5".to_owned()).unwrap(),
            (10, 25, 5)
        );
    }
}
