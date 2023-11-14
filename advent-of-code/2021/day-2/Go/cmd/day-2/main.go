package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

// start 7:18
// reads file relative to go.mod 7:24
// finish 8:01

func readFileToString() (string, error) {
	bytes, err := os.ReadFile("../input.txt")

	if err != nil {
		return "", err
	}

	return string(bytes), nil
}

func getPosition(text string) (int, int, error) {
	horizontal := 0
	depth := 0

	lines := strings.Split(text, "\n")

	for _, line := range lines {
		if line == "" {
			continue
		}

		instruction := strings.Split(line, " ")
		direction := instruction[0]

		magnitude, err := strconv.Atoi(instruction[1])
		if err != nil {
			fmt.Println(line, "line is brokey")
			return 0, 0, err
		}

		switch direction {
		case "up":
			depth -= magnitude
		case "down":
			depth += magnitude
		case "forward":
			horizontal += magnitude
		}
	}

	return horizontal, depth, nil
}

func main() {
	str, err := readFileToString()
	if err != nil {
		fmt.Println(err)
	}

	horizontal, depth, err := getPosition(str)

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(horizontal * depth)
}
