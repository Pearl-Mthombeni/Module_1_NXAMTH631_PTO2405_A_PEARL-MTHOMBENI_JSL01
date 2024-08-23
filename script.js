function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let regex = /^pet_[a-zA-Z0-9]+$/; // Expression to validate the pattern "pet_" followed by alphanumeric characters
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
    // Check if input starts with 'pet_' and followed by alphanumeric characters
     
    if (regex.test(input)) { // Check if the input string matches the defined regex
        result = "Valid Syntax 🟢"; 
    } else {
        result = "Invalid Syntax 🔴";
    }

            document.getElementById('result').innerText = result;
}


