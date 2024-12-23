document.getElementById("submitButton").addEventListener("click", () => {
    // Get the elements by their IDs
    const title = document.getElementById("titleText");
    const amountSaved = document.getElementById("amountSavedText");
    const goal = document.getElementById("goalText");
    const completeDate = document.getElementById("completeByDate");

    // Convert the values to appropriate types (string for text and float for numbers)
    const titleValue = title.value;  // String value for title
    const amountSavedValue = parseFloat(amountSaved.value);  // Float for amount saved
    const goalValue = parseFloat(goal.value);  // Float for goal amount
    const completeDateValue = new Date(completeDate.value);  // Date object for completion date

    // Log the values to the console
    console.log("Title:", titleValue);
    console.log("Amount Saved:", amountSavedValue);
    console.log("Goal:", goalValue);
    console.log("Completion Date:", completeDateValue);
    console.log("You need to save $", calculateSavings(amountSavedValue, goalValue, completeDateValue).toFixed(2));

    const output = document.getElementById("output")
    output.innerText = `${titleValue}\n---------------\nAmount Saved: $${amountSavedValue}\nGoal: $${goalValue}\nComplete by: ${completeDateValue}\nYou need to save $${calculateSavings(amountSavedValue, goalValue, completeDateValue).toFixed(2)} in ${differenceInDays(completeDateValue)} days!`;
});

function calculateSavings(amountSaved, goalAmount, completedBy) {
    const today = new Date();  // Current date and time
    
    // Ensure completedBy is a Date object (already done, no need to convert)
    // Calculate the difference in milliseconds between today and the completion date
    let differenceBetweenDays = differenceInDays(completedBy);

    

    // Return the savings rate per day
    return (goalAmount - amountSaved) / differenceBetweenDays;
}

function differenceInDays(completedBy) {
    const today = new Date();  // Current date and time
    
    // Ensure completedBy is a Date object (already done, no need to convert)
    // Calculate the difference in milliseconds between today and the completion date
    let differenceBetweenDays = completedBy - today;

    // Convert milliseconds to days (divide by 1000 * 60 * 60 * 24)
    const difference = Math.floor(differenceBetweenDays / (1000 * 60 * 60 * 24));

    return difference;
}
