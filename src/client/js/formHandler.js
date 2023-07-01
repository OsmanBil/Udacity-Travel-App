// Global Variables
let tripStartDate = '';
let tripEndDate = '';

// Function to handle the submit event
function handleSubmit(event) {
    event.preventDefault(); // Prevent default action
    const destinationInput = document.getElementById("destination-input").value;    // Get the destination input value
    tripStartDate = document.getElementById("from-date-input").value;   // Get the trip start input value
    tripEndDate = document.getElementById("to-date-input").value;       // Get the trip end input value

    // Check if input value is empty
    if (destinationInput === "") {
        alert("Please enter a text.");
        return false;
    }

    const query = destinationInput; // Set the query to the destination input value

    Client.getGeonamesData(query);  // Call the getGeonamesData function
    return true;
}

export { handleSubmit, tripStartDate, tripEndDate };
