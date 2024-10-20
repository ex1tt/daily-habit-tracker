// Functions to handle all events within app
import { addHabit, removeHabit, toggleHabitCompletion, checkHabitExists, clearHabits, getHabitNameFromQuery, editHabit, displayErrorMessage } from './data-manager.js';
import { showHabits, displayHabitInformation } from './ui-manager.js';

// Function to handle habit form submission
export function handleSubmit() {

    const habitName = document.getElementById("habitNameInput").value;
    const habitDesc = document.getElementById("habitDescriptionInput").value;
    const habitTime = document.getElementById("habitTimeInput").value;
    const habitCompleted = document.getElementById("habitCompletedInput").checked;

    if(!(habitName && habitDesc && habitTime)) {
        displayErrorMessage("Error: Please fill in all sections of form.");
    }
    else if(checkHabitExists(habitName)) {
        displayErrorMessage("Error: Habit Exists.");
    }
    else {
        addHabit(habitName, habitDesc, habitTime, habitCompleted);
        clearInputFields(); // Clear input fields after submission
        location.assign("index.html"); // Bring back to home page
    }
}

// Function to clear input fields after submitting
function clearInputFields() {

    document.getElementById("habitNameInput").value = "";
    document.getElementById("habitDescriptionInput").value = "";
    document.getElementById("habitTimeInput").value = "";
    document.getElementById("habitCompletedInput").checked = false;
}

export function clearEditFields() {

    document.getElementById("habitNameEdit").value = "";
    document.getElementById("habitDescriptionEdit").value = "";
    document.getElementById("habitTimeEdit").value = "";
    document.getElementById("habitCompletedEdit").checked = false;
}

// Function to handle habit completion toggle
export function handleHabitCompletion(current_window) {

    // ensure no error in page
    if(document.getElementById("error-message").textContent == "") {
        toggleHabitCompletion(current_window);
        displayHabitInformation(current_window);
    }
    
}

// Function to handle habit removal
export function handleRemoveHabit(current_window) {

    // ensure no error in page
    if(document.getElementById("error-message").textContent == "") {
        removeHabit(current_window);
        location.assign("index.html");
    }
}

// Function to handle habit clearing
export function handleClearHabits() {
    clearHabits();
    showHabits();
}

// Function to handle habit edit button clicked from habit.html
export function handleEditLink(current_window) {

    // ensure no error in page
    if(document.getElementById("error-message").textContent == "") {
        location.assign(`edit.html?name=${encodeURIComponent(getHabitNameFromQuery(current_window))}`)
    }

}

export function handleSubmitEdit(current_window) {

    const newHabitName = document.getElementById("habitNameEdit").value;
    const newHabitDesc = document.getElementById("habitDescriptionEdit").value;
    const newHabitTime = document.getElementById("habitTimeEdit").value;
    const newHabitCompleted = document.getElementById("habitCompletedEdit").checked;

    if (newHabitName && newHabitDesc && newHabitTime) {

        editHabit(current_window, newHabitName, newHabitDesc, newHabitTime, newHabitCompleted);

    }

}
