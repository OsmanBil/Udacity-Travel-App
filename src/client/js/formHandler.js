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
        alert("Please enter your destination city.");
        return false;
    //  Check if trip start date is empty
    }else if (tripStartDate === "") {
        alert("Please enter your trip start date.");
        return false;
    //  Check if trip end date is empty 
    }else if (tripEndDate === "") {
        alert("Please enter your trip end date.");
        return false;
    //  Check if trip start date is greater than trip end date
    }else if (tripStartDate > tripEndDate) {
        alert("Please enter a valid trip start and end date.");
        return false;
    //  Check if trip start date is less than current date
    }  else if  (Date.parse(tripStartDate) < Date.now()) {
        alert("Please enter a valid trip start date.");
        return false;
    }

    const query = destinationInput; // Set the query to the destination input value

    Client.getGeonamesData(query);  // Call the getGeonamesData function
    return true;
}

export { handleSubmit, tripStartDate, tripEndDate };
