// Contains functions for getting, setting, adding, removing habits etc...

import { clearEditFields } from "./event-handler.js";

// Function to get habits from local storage
export function getHabits() {
    return JSON.parse(localStorage.getItem('habits')) || [];
}

// Function to write habits to local storage
export function setHabits(habits) {
    localStorage.setItem('habits', JSON.stringify(habits));
}

// Function to add a habit to current habits
export function addHabit(name, desc, time, complete) {

    let habits = getHabits();
    habits.push({ name, description: desc, time, completed: complete });

    setHabits(habits);
}

// Function to edit a habit
export function editHabit(current_window, name, desc, time, completed) {

    let habitName = getHabitNameFromQuery(current_window);
    const habits = getHabits();
    const habit = habits.find(h => h.name === habitName);

    // Only edits if habit exists and is not a duplicate of another habit...
    if(habit && (!checkHabitExists(name) || habitName === name)) {

        habit.name = name;
        habit.description = desc;
        habit.time = time;
        habit.completed = completed;

        setHabits(habits);
        clearEditFields() // Clear input fields after submission
        location.assign("index.html");
        
    }
    else{
        displayErrorMessage("Error: Duplicate Habit")
    }
}

// Function to remove a habit based on !habit name!
export function removeHabit(current_window) {

    const habitName = getHabitNameFromQuery(current_window);
    const habits = getHabits();
    const index = habits.findIndex(h => h.name === habitName);
    
    if (index > -1) {

        habits.splice(index, 1);
        setHabits(habits);
    }
}

// Function to clear all habits from local storage
export function clearHabits() {

    let habits = [];
    setHabits(habits);
}

// Function to check if a habit exists based on name
export function checkHabitExists(name) {

    let habits = getHabits();
    return habits.find(h => h.name === name) != null;
}

// Function to set a habit to completed or uncompleted
export function toggleHabitCompletion(current_window) {

    let habitName = getHabitNameFromQuery(current_window);
    const habits = getHabits();
    const habit = habits.find(h => h.name === habitName);

    if (habit) {

        habit.completed = !habit.completed;
        setHabits(habits);
    }
}

function setAllHabitsCompletedFalse() {

    const habits = getHabits();

    habits.forEach(habit => {

        habit.completed = false;

    });

    setHabits(habits);

}

// Function to get a habit name based on page query -> used only in habit.html
export function getHabitNameFromQuery(current_window) {

    const urlParams = new URLSearchParams(current_window);

    const habitName = urlParams.get('name');    // retreive habit name based on url query

    return habitName;

}

// Helper function to display error messages on the page
export function displayErrorMessage(message) {
    const errorDiv = document.getElementById('error-message'); // Assuming you have an element with this ID
    errorDiv.textContent = message;
}

// Function to reset all habits to false if a day has passed.
export function checkNewDay() {

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    const lastDate = localStorage.getItem('lastDateLoad')

    // If todays date does not match the last login data
    if(today != lastDate) {

        console.log(today)
        console.log(lastDate)

        setAllHabitsCompletedFalse();

        localStorage.setItem('lastDateLoad', today);
    }
}