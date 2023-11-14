package main

import (
	"fmt"
	"os"
	"strings"
)

// start 7:18
// reads file relative to go.mod 7:24
func main() {
	bytes, err := os.ReadFile("../input.txt")

	if err != nil {
		fmt.Print(err)
	}

	str := string(bytes)

	lines := strings.Split(str, "\n")

	for _, line := range lines {
		fmt.Println(line)
	}
}
