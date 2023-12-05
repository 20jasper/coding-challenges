use itertools::Itertools;

use crate::custom_error::AocError;

#[tracing::instrument]
pub fn process(_input: &str) -> miette::Result<String, AocError> {
    let file = include_str!("../input1.txt");

    let (seeds, maps) = group_seeds_and_maps(file);

    dbg!(seeds);

    for map in maps {
        println!();
        println!("NEW MAP");
        for line in map {
            dbg!(line);
        }
    }

    todo!()
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
