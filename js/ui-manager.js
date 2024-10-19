// Function to deal with all the user interface js

import {getHabitNameFromQuery, getHabits} from './data-manager.js';

// Function to display list of habits in home page
export function showHabits() {

    const habits = getHabits();
    const habitsListElement = document.getElementById("habitsList");
    habitsListElement.innerHTML = ""; // Clear existing habits

    const ul = document.createElement('ul');

    habits.forEach(habit => {

        const li = document.createElement('li');
        const a = document.createElement('a');

        a.href = `habit.html?name=${encodeURIComponent(habit.name)}`;
        a.textContent = `${habit.name} - ${habit.completed ? 'Completed' : 'Not Completed'}`;

        li.appendChild(a);
        ul.appendChild(li);

    });

    habitsListElement.appendChild(ul);
}

// Function to display detailed information about a specific habit in habit.html
export function displayHabitInformation(current_window) {

    let habitName = getHabitNameFromQuery(current_window);
    const habits = getHabits();
    const habit = habits.find(h => h.name === habitName);

    const headerElement = document.getElementById("habit-name");
    const statusElement = document.getElementById("habit-status");
    const descElement = document.getElementById("habit-description");
    const timeElement = document.getElementById("habit-time-to-complete");

    if (habit) {

        headerElement.textContent = `Habit: ${habit.name}`;
        statusElement.textContent = `Status: ${habit.completed ? 'Completed' : 'Not Completed'}`;
        descElement.textContent = `Description: ${habit.description}`;
        timeElement.textContent = `Time To Complete: ${habit.time}`;

    } else {
        headerElement.textContent = 'Habit: Not Found';
    }
}
