module Main where

import Data.List (sort, transpose)
import qualified Data.Map as Map
import Data.Maybe (fromMaybe)

{-
part 1 23:01-23:50. input parsing was most difficult
sort lists, then zip together and get abs distances, then sum

part 2 23:51-00:16
remembering how to build a freq map was toughest, but otherwise was straightforward
-}
main :: IO ()
main = do
  contents <- readFile "input.txt"
  print $ totalSimilarity $ parseInput contents

-- part 2
totalSimilarity :: [[Int]] -> Int
totalSimilarity [xs, ys] = sum $ map similarity xs
  where
    frequency = frequencyMap ys
    similarity x = x * (fromMaybe 0 $ Map.lookup x frequency)
totalSimilarity _ = error "expected two lists"

frequencyMap :: [Int] -> Map.Map Int Int
frequencyMap = foldr (\k acc -> Map.insertWith (+) k 1 acc) Map.empty

-- part 1
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
