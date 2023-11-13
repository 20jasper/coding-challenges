use anyhow::{anyhow, Context, Result};

/// A direction and a magnitude
enum Instruction {
    Down(i32),
    Up(i32),
    Forward(i32),
}

fn try_parse_instruction(instruction: (usize, &str)) -> Result<Instruction> {
    let (line_number, text) = instruction;
    let (direction, magnitude) = text.split_once(' ').context(format!(
        "Error: no space in instruction on line {line_number}: {text}"
    ))?;

    let magnitude = magnitude.parse::<i32>().context(format!(
        "Could not parse magnitude on line number {line_number}: {magnitude}"
    ))?;

    match direction {
        "down" => Ok(Instruction::Down(magnitude)),
        "up" => Ok(Instruction::Up(magnitude)),
        "forward" => Ok(Instruction::Forward(magnitude)),
        _ => Err(anyhow!(format!(
            "Invalid direction on line {line_number}: {direction}"
        ))),
    }
}

pub fn try_get_position(text: String) -> Result<(i32, i32, i32)> {
    text.lines()
        .enumerate()
        .map(try_parse_instruction)
        .try_fold(
            (0, 0, 0),
            |(horizontal, depth, aim), instruction| match instruction {
                Ok(Instruction::Down(magnitude)) => Ok((horizontal, depth, aim + magnitude)),
                Ok(Instruction::Up(magnitude)) => Ok((horizontal, depth, aim - magnitude)),
                Ok(Instruction::Forward(magnitude)) => {
                    Ok((horizontal + magnitude, depth + aim * magnitude, aim))
                }
                Err(e) => Err(e),
            },
        )
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn down_should_increase_aim() -> Result<()> {
        assert_eq!(try_get_position("down 5".to_owned())?, (0, 0, 5));
        Ok(())
    }

    #[test]
    fn up_should_decrease_aim() -> Result<()> {
        assert_eq!(try_get_position("up 5".to_owned())?, (0, 0, -5));
        Ok(())
    }

    #[test]
    fn forward_should_increase_horizontal() -> Result<()> {
        assert_eq!(try_get_position("forward 5".to_owned())?, (5, 0, 0));
        Ok(())
    }

    #[test]
    fn forward_and_positive_aim_increases_depth() -> Result<()> {
        assert_eq!(
            try_get_position("forward 5\ndown 5\nforward 5".to_owned())?,
            (10, 25, 5)
        );
        Ok(())
    }

    #[test]
    fn error_should_contain_line_number() -> Result<()> {
        let error_message = try_get_position("forward 5\ndown ERROR!\nforward 5".to_owned())
            .unwrap_err()
            .to_string();

        assert!(error_message.contains('1'));
        assert!(error_message.contains("line number"));

        Ok(())
    }

    #[test]
    fn error_should_contain_direction() -> Result<()> {
        let error_message = try_get_position("BADDIRECTION 5".to_owned())
            .unwrap_err()
            .to_string();

        assert!(error_message.contains("direction"));

        Ok(())
    }

    #[test]
    fn error_should_contain_magnitude() -> Result<()> {
        let error_message = try_get_position("up NOT_A_DIRECTION".to_owned())
            .unwrap_err()
            .to_string();

        assert!(error_message.contains("magnitude"));
        assert!(error_message.contains("NOT_A_DIRECTION"));

        Ok(())
    }

    #[test]
    fn error_should_say_no_space() -> Result<()> {
        let error_message = try_get_position("hhh".to_owned()).unwrap_err().to_string();

        dbg!(&error_message);

        assert!(error_message.contains("no space"));
        assert!(error_message.contains("hhh"));

        Ok(())
    }
}
