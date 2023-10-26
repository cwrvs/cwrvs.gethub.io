/* Reset default margin and padding */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0; /* Light gray background */
    margin: 0;
    padding: 0;
}

/* Header styles */
header {
    background-color: #3498db; /* Blue header background */
    color: #fff; /* White text */
    padding: 20px 0;
    text-align: center;
}

h1 {
    margin: 0;
}

/* Section styles */
section {
    background-color: #fff; /* White section background */
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Light shadow */
}

/* Button styles */
button {
    background-color: #3498db; /* Blue button background */
    color: #fff; /* White text on buttons */
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #2980b9; /* Darker blue on hover */
}

/* Input styles */
input[type="number"],
input[type="text"] {
    padding: 10px;
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    /* Adjust to move cursor to the top of the input box */
    caret-color: #3498db; /* Blue caret color */
    /* Add a slight top padding for input elements */
    padding-top: 5px;
}

/* List styles */
ul {
    list-style-type: none;
    padding: 0;
}

/* Additional styles for mobile devices */
@media (max-width: 768px) {
    /* Limit the width of number input fields */
    input[type="number"] {
        max-width: 100px; /* Adjust the width as needed */
    }

    /* Adjust the width and height of text input field for a more spacious appearance */
    input[type="text"] {
        max-width: 200px; /* Adjust the width as needed */
        height: 150px; /* Adjust the height as needed */
    }

    /* Adjust spacing between buttons for mobile devices */
    #name-generator button {
        display: block;
        margin-bottom: 10px; /* Add some vertical spacing between the buttons */
    }
}

/* Instructions styles */
.instructions {
    font-style: italic;
    color: #555; /* Dark gray for instructions */
}

/* Footer styles */
footer {
    text-align: center;
    background-color: #3498db; /* Blue footer background */
    color: #fff; /* White text in footer */
    padding: 10px 0;
    margin-top: 20px;
}

/* Hidden class to hide elements */
.hidden {
    display: none;
}