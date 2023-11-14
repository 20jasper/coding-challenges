package main

import (
	"fmt"
	"os"
)

// start 7:18
// reads file relative to go.mod 7:24
func main() {
	bytes, err := os.ReadFile("../input.txt")

	if err != nil {
		fmt.Print(err)
	}

	str := string(bytes)

	fmt.Println(str)
}
