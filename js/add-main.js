import { handleSubmit } from './event-handler.js';

// Submit habit button listener
document.getElementById('submit-habit-button').addEventListener('click', () => {

    handleSubmit();
});