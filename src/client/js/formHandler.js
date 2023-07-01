let tripStartDate = '';
let tripEndDate = '';


function handleSubmit(event) {
    event.preventDefault();

    const destinationInput = document.getElementById("destination-input").value;


     tripStartDate = document.getElementById("from-date-input").value;
     tripEndDate = document.getElementById("to-date-input").value;
 
   

    // Check if input value is empty
    if (destinationInput === "") {
      alert("Please enter a text.");
      return false;
    }

    const query = destinationInput; // Geben Sie hier den Namen der Stadt oder die Postleitzahl an

    console.log("STADT: " + destinationInput);

    Client.getGeonamesData(query);
    return true;
}

export { handleSubmit, tripStartDate, tripEndDate };
