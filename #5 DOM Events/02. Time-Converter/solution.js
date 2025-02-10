function attachEventsListeners() {

    var daysElement = document.getElementById("days");
    var hoursElement = document.getElementById("hours");
    var minutesElement = document.getElementById("minutes");
    var secondsElement = document.getElementById("seconds");
    
    const buttons = document.querySelectorAll("input[type='button']");
    let days, hours, minutes, seconds;

    // Add event listener to all buttons
    buttons.forEach(button => {
        button.addEventListener("click", convertTime);
    });

    function convertTime(e) {
        console.log(e.currentTarget);
        let correspondInput = e.currentTarget.previousElementSibling;
        const possibilities = ["days", "hours", "minutes", "seconds"];
        
        // Get the numeric value of the corresponding input field
        const value = parseFloat(correspondInput.value);
        
        if (isNaN(value)) {
            console.log("Invalid number entered.");
            return;
        }

        if (correspondInput.id === possibilities[0]) {  // If days is entered
            days = value;
            hoursElement.value = days * 24;
            minutesElement.value = hoursElement.value * 60;
            secondsElement.value = minutesElement.value * 60;
        } else if (correspondInput.id === possibilities[1]) {  // If hours is entered
            hours = value;
            daysElement.value = hours / 24;
            minutesElement.value = hours * 60;
            secondsElement.value = minutesElement.value * 60;
        } else if (correspondInput.id === possibilities[2]) {  // If minutes is entered
            minutes = value;
            secondsElement.value = minutes * 60;
            hoursElement.value = minutes / 60;
            daysElement.value = hoursElement.value / 24;
        } else if (correspondInput.id === possibilities[3]) {  // If seconds is entered
            seconds = value;
            minutesElement.value = seconds / 60;
            hoursElement.value = minutesElement.value / 60;
            daysElement.value = hoursElement.value / 24;
        }
    }
}
