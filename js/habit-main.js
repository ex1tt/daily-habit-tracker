import { handleHabitCompletion, handleRemoveHabit, handleEditLink} from "./event-handler.js";
import { displayHabitInformation } from "./ui-manager.js";

// Display habit info on page load
displayHabitInformation(window.location.search);

// Complete habit button listener
document.getElementById('complete-habit-button').addEventListener('click', () => {
    
    handleHabitCompletion(window.location.search);
});

// Remove habit button listener
document.getElementById('remove-habit-button').addEventListener('click', () => {

    handleRemoveHabit(window.location.search);
});

// Remove habit button listener
document.getElementById('edit-habit-button').addEventListener('click', () => {

    handleEditLink(window.location.search);
});