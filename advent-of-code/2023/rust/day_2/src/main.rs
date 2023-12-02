fn main() {
    let file = include_str!("../input.txt");

    let res = file
        .lines()
        .enumerate()
        .filter_map(is_game_possible)
        .sum::<usize>();

    dbg!(&res);
}

struct Rgb(i32, i32, i32);

impl Rgb {
    fn new() -> Self {
        Self(0, 0, 0)
    }

    fn red(&mut self, val: i32) {
        self.0 = val;
    }

    fn green(&mut self, val: i32) {
        self.1 = val;
    }

    fn blue(&mut self, val: i32) {
        self.2 = val;
    }
}

fn is_game_possible((i, line): (usize, &str)) -> Option<usize> {
    let game_id = i + 1;
    let is_possible = parse_line((game_id, line)).all(|Rgb(r, g, b)| r <= 12 && g <= 13 && b <= 14);

    if is_possible {
        Some(game_id)
    } else {
        None
    }
}

fn parse_line((game_id, line): (usize, &str)) -> impl Iterator<Item = Rgb> + '_ {
    line.trim_start_matches(&format!("Game {game_id}: "))
        .split(';')
        .map(parse_round)
}

fn parse_round(round: &str) -> Rgb {
    round
        .split(',')
        .map(str::trim)
        .map(|cube| {
            let (amount, color) = cube
                .split_once(' ')
                .expect("couldn't split {cube}");

            (amount.parse::<i32>().unwrap(), color)
        })
        .fold(Rgb::new(), |mut acc, (amount, color)| {
            match color {
                "red" => acc.red(amount),
                "green" => acc.green(amount),
                "blue" => acc.blue(amount),
                _ => unreachable!(),
            };

            acc
        })
}
