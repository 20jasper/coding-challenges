module Main where

import Data.List (sort, transpose)

-- part 1 start 23:01-23:50. input parsing was most difficult
{-
sort lists, then zip together and get abs distances, then sum
-}
main :: IO ()
main = do
  contents <- readFile "input.txt"
  print $ totalDistance $ parseInput contents

totalDistance :: [[Int]] -> Int
totalDistance xs =
  let sorted = map sort xs
      diffs = map (\(x, y) -> abs $ x - y) (pairs sorted)
   in sum diffs
  where
    pairs [x, y] = zip x y
    pairs _ = error "not long enough"

parseInput :: String -> [[Int]]
parseInput x =
  let groups = transpose $ map words . lines $ x
   in map (map read) groups
