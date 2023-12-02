use anyhow::{Context, Result};

pub fn parse_calibration_value((i, line): (usize, &str)) -> Result<u64> {
    let format_line_err = || format!("could not parse digit in line {i}: {line}");

    let line = expand_digits(line);

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

/// replace "one" with "one1one", "two" with "two2two" and so in the range 1..=9
fn expand_digits(line: &str) -> String {
    [
        ("one", "one1one"),
        ("two", "two2two"),
        ("three", "three3three"),
        ("four", "four4four"),
        ("five", "five5five"),
        ("six", "six6six"),
        ("seven", "seven7seven"),
        ("eight", "eight8eight"),
        ("nine", "nine9nine"),
    ]
    .iter()
    .fold(line.to_string(), |acc, (to_replace, replacement)| {
        acc.replace(to_replace, replacement)
    })
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

    #[test]
    fn should_work_with_a_spelled_out_digit() -> Result<()> {
        assert_eq!(parse_calibration_value((0, "five"))?, 55);

        Ok(())
    }

    #[test]
    fn should_work_with_spelled_out_digits() -> Result<()> {
        assert_eq!(parse_calibration_value((0, "one5three"))?, 13);

        Ok(())
    }

    #[test]
    fn should_count_overlapping_letters() -> Result<()> {
        assert_eq!(parse_calibration_value((0, "eightwo"))?, 82);

        Ok(())
    }

    #[test]
    fn should_work_with_example_test_cases() -> Result<()> {
        let test_cases = [
            ("two1nine", 29),
            ("eightwothree", 83),
            ("abcone2threexyz", 13),
            ("xtwone3four", 24),
            ("4nineeightseven2", 42),
            ("zoneight234", 14),
            ("7pqrstsixteen", 76),
        ];

        for (input, result) in test_cases {
            assert_eq!(parse_calibration_value((0, input))?, result);
        }

        Ok(())
    }
}
