use std::collections::HashSet;

pub fn run() -> i32 {
    let file = include_str!("../input.txt");
    let card_count = file.lines().count();

    let matching = file.lines().enumerate().map(parse_line);

    get_total_card_count(matching, card_count)
}

fn get_total_card_count(iter: impl Iterator<Item = usize>, card_count: usize) -> i32 {
    let mut vec = vec![0_i32; card_count + 2];
    // init all cards to 1
    vec[1] = 1;
    vec[card_count + 1] = -1;

    let mut sum = 1;
    for (i, matching) in iter.enumerate() {
        let curr = i + 1;
        let start_range = curr + 1;
        let end_range = start_range + matching;

        // mark start
        vec[start_range] += sum;

        // mark end
        vec[end_range] -= sum;

        // keep rolling sum
        sum += vec[start_range];
    }

    let mut total = 0;
    let mut rolling_sum = 0;
    for val in vec {
        rolling_sum += val;
        total += rolling_sum;
    }

    total
}

fn parse_line((i, line): (usize, &str)) -> usize {
    let card_id = i + 1;
    let line = line.trim_start_matches(&format!("Card {card_id}:"));

    let scratch_cards = line.split_once('|').expect("invalid format, no |");

    parse_scratch_card(scratch_cards.0)
        .intersection(&parse_scratch_card(scratch_cards.1))
        .count()
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