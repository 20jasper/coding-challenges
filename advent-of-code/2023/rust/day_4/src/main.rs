use std::collections::HashSet;

fn main() {
    let file = include_str!("../input.txt");

    let res = file.lines().enumerate().map(parse_line).sum::<usize>();

    dbg!(res);
}

fn parse_line((i, line): (usize, &str)) -> usize {
    let card_id = i + 1;
    let line = line.trim_start_matches(&format!("Card {card_id}:"));

    let scratch_cards = line.split_once('|').expect("invalid format, no |");

    let matching = parse_scratch_card(scratch_cards.0)
        .intersection(&parse_scratch_card(scratch_cards.1))
        .count();

    if matching == 0 {
        return 0;
    }
    2_usize.pow((matching as u32) - 1)
}

fn parse_scratch_card(scratch_card: &str) -> HashSet<&str> {
    scratch_card.split_whitespace().collect::<HashSet<&str>>()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn should_parse_scratch_card_with_variable_spacing() {
        assert_eq!(
            parse_scratch_card("41 48  9 10 18"),
            HashSet::from(["41", "48", "9", "10", "18"])
        )
    }

    #[test]
    fn should_be_worth_zero_for_no_matches() {
        assert_eq!(parse_line((1, "Card 1: 1 2 | 13")), 0)
    }
    #[test]
    fn should_be_worth_one_point_for_one_match() {
        assert_eq!(parse_line((1, "Card 1: 1 2 | 1")), 1)
    }
    #[test]
    fn should_be_worth_double_for_each_additional_match() {
        assert_eq!(parse_line((1, "Card 1: 1 2 3 | 1 2 3")), 4)
    }
}
