use std::ops::Range;

use itertools::Itertools;

use crate::custom_error::AocError;

#[tracing::instrument]
pub fn process(_input: &str) -> miette::Result<String, AocError> {
    let file = include_str!("../input1.txt");

    let (seeds, maps) = group_seeds_and_maps(file);

    let seeds = parse_seeds(seeds);
    let maps = maps.iter().map(|map| parse_map(map));

    for map in maps {
        println!();
        println!("NEW MAP");
        for line in map {
            dbg!(line);
        }
    }

    todo!()
}

#[derive(Debug)]
struct Line {
    range: Range<i64>,
    /// source to destination
    difference: i64,
    source_start: i64,
    destination_start: i64,
    range_length: i64,
}

fn parse_map_line(line: &str) -> Line {
    let mut vals = line
        .split_whitespace()
        .map(|x| x.parse::<i64>().unwrap());

    let (destination_start, source_start, range_length) = (
        vals.next().unwrap(),
        vals.next().unwrap(),
        vals.next().unwrap(),
    );

    Line {
        range: (source_start..(source_start + range_length)),
        difference: source_start - destination_start,
        source_start,
        destination_start,
        range_length,
    }
}

fn parse_map<'a>(map: &'a [&'a str]) -> impl Iterator<Item = Line> + 'a {
    map.iter()
        .map(|line: &&str| parse_map_line(line))
}

fn parse_seeds(seeds: &str) -> impl Iterator<Item = u64> + '_ {
    seeds
        .trim_start_matches("seeds: ")
        .split_whitespace()
        .map(|seed| seed.parse::<u64>().unwrap())
}

fn group_seeds_and_maps(file: &str) -> (&str, Vec<Vec<&str>>) {
    // seeds maps are separated by newlines
    let maps_and_seeds = file
        .lines()
        .group_by(|&line| line.is_empty());

    let maps_and_seeds = &mut maps_and_seeds
        .into_iter()
        .filter(|(is_empty, _)| !is_empty)
        .map(|(_, lines)| lines);

    // the first line is seeds
    let seeds = maps_and_seeds
        .next()
        .unwrap()
        .collect::<Vec<&str>>()[0];

    // the first line is the title and can be ignored
    let maps = maps_and_seeds
        .map(|mut x| {
            let _ = x.next();

            x.collect::<Vec<&str>>()
        })
        .collect::<Vec<Vec<&str>>>();

    (seeds, maps)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_process() -> miette::Result<()> {
        todo!("haven't built test yet");
        let input = "";
        assert_eq!("", process(input)?);
        Ok(())
    }
}
