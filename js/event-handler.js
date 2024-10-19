// Functions to handle all events within app
import { addHabit, removeHabit, toggleHabitCompletion, checkHabitExists, clearHabits } from './data-manager.js';
import { showHabits, displayHabitInformation } from './ui-manager.js';

// Function to handle habit form submission
export function handleSubmit() {

    const habitName = document.getElementById("habitNameInput").value;
    const habitDesc = document.getElementById("habitDescriptionInput").value;
    const habitTime = document.getElementById("habitTimeInput").value;
    const habitCompleted = document.getElementById("habitCompletedInput").checked;

    if (habitName && habitDesc && habitTime && !checkHabitExists(habitName)) {

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

// Function to handle habit completion toggle
export function handleHabitCompletion(current_window) {

    toggleHabitCompletion(current_window);
    displayHabitInformation(current_window);
    
}

// Function to handle habit removal
export function handleRemoveHabit(current_window) {
    removeHabit(current_window);
    location.assign("index.html");
}

// Function to handle habit clearing
export function handleClearHabits() {
    clearHabits();
    showHabits();
}
