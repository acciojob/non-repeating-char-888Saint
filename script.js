function firstNonRepeatedChar(str) {
    // Step 1: Create a Map to store the frequency of each character
    const charCount = new Map();
    
    // Step 2: Count the frequency of each character in the string
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Step 3: Find the first character with a frequency of 1
    for (const char of str) {
        if (charCount.get(char) === 1) {
            return char; // Return the first non-repeated character
        }
    }

    // Step 4: If no non-repeated character is found, return null
    return null;
}

// Prompt the user for input
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
