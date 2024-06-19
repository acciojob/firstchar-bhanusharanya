function firstChar(text) {
  // your code here
 const trimmedInput = input.trim();
    
    // Check if the trimmed input is empty
    if (trimmedInput === '') {
        return '';
    }
    
    // Return the first character of the trimmed input
    return trimmedInput.charAt(0);
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
