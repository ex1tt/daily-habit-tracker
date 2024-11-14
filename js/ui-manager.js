// Function to deal with all the user interface js

import {displayErrorMessage, getHabitNameFromQuery, getHabits} from './data-manager.js';

// Function to display list of habits in home page
export function showHabits() {

    const habits = getHabits();
    const habitsListElement = document.getElementById("habitsList");
    habitsListElement.innerHTML = ""; // Clear existing habits

    // creates a html unordered list
    const ul = document.createElement('ul');

    // for each item in list
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
        displayErrorMessage("Error: Habit not found.")
    }
}

// Function to display edit information
export function displayEditInformation(current_window) {

    let habitName = getHabitNameFromQuery(current_window);
    const habits = getHabits();
    const habit = habits.find(h => h.name === habitName);

    const habitHeaderElement = document.getElementById("habit-editing-header");
    const habitNameElement = document.getElementById("habitNameEdit");
    const habitDescElement = document.getElementById("habitDescriptionEdit");
    const habitTimeElement = document.getElementById("habitTimeEdit");
    const habitCompletedElement = document.getElementById("habitCompletedEdit");

    if (habit) {    // if habit exists

        
        habitHeaderElement.textContent = `Edit Habit: ${habit.name}`;
        habitNameElement.value = habit.name;
        habitDescElement.value = habit.description;
        habitTimeElement.value = habit.time;
        habitCompletedElement.checked = habit.completed;

    } else {
        console.log("EUIERUI");
    }
}
