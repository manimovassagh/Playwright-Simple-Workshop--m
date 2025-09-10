// Imports for font checking utilities
// Simple Go utilities for font checking
package main

import (
	"strings"
)

// Checks if the font name contains a pretty keyword
func IsPrettyFont(font string) bool {
	keywords := []string{"Sans", "Serif", "Mono"}
	for _, kw := range keywords {
		if strings.Contains(strings.ToLower(font), strings.ToLower(kw)) {
			return true
		}
	}
	return false
}

// Checks if the font name is long enough (at least 5 characters)
func IsFontNameLongEnough(font string) bool {
	return len(font) >= 5
}

// Combined check: pretty and long enough
func IsFontPrettyEnough(font string) bool {
	return IsPrettyFont(font) && IsFontNameLongEnough(font)
}
