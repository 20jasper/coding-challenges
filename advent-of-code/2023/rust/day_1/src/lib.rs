pub fn parse_calibration_value(line: &str) -> u64 {
    let first_digit = line.chars().find(char::is_ascii_digit).unwrap();
    let last_digit = line.chars().rfind(char::is_ascii_digit).unwrap();

    format!("{first_digit}{last_digit}").parse::<u64>().unwrap()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn should_parse_two_digits() {
        assert_eq!(parse_calibration_value("1abc2"), 12);
    }

    #[test]
    fn should_repeat_if_only_one_digit() {
        assert_eq!(parse_calibration_value("1ab"), 11);
    }

    #[test]
    fn should_work_with_digits_in_middle() {
        assert_eq!(parse_calibration_value("aaaaa89bbbbb"), 89);
    }
}
