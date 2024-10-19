import { handleClearHabits } from './event-handler.js';
import { showHabits } from './ui-manager.js';
import { getHabits } from './data-manager.js';

// Clear habits button listener
document.getElementById('clear-habits-button').addEventListener('click', () => {
    handleClearHabits();
});

// Show habits on initial load
showHabits();
// Debugging
console.log(getHabits())