use anyhow::{Context, Result};

pub fn parse_calibration_value((i, line): (usize, &str)) -> Result<u64> {
    let format_line_err = || format!("could not parse digit in line {i}: {line}");

    let first_digit = line
        .chars()
        .find(char::is_ascii_digit)
        .with_context(format_line_err)?;
    let last_digit = line
        .chars()
        .rfind(char::is_ascii_digit)
        .with_context(format_line_err)?;

    format!("{first_digit}{last_digit}")
        .parse::<u64>()
        .with_context(format_line_err)
}

#[cfg(test)]
mod tests {
    use anyhow::Ok;

    use super::*;

    #[test]
    fn should_parse_two_digits() -> Result<()> {
        assert_eq!(parse_calibration_value((0, "1abc2"))?, 12);

        Ok(())
    }

    #[test]
    fn should_repeat_if_only_one_digit() -> Result<()> {
        assert_eq!(parse_calibration_value((0, "1ab"))?, 11);

        Ok(())
    }

    #[test]
    fn should_work_with_digits_in_middle() -> Result<()> {
        assert_eq!(parse_calibration_value((0, "aaaaa89bbbbb"))?, 89);

        Ok(())
    }
}
