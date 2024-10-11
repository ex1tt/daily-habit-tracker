function addHabit(habit) {

    if(habit) { // check argument is not blank/null

        let habits = getHabits();  // Grab habits from local storage

        habits.push(habit); // Push new habit to top of object array

        localStorage.setItem('habits', JSON.stringify(habits)); // Pass the new object array back into storage
    }
}

function removeHabit() {

    indexInputElement = document.getElementById("habitRemoveInput")

    let index = indexInputElement.value -1;

    let habits = getHabits();

    if (index > -1 && index < habits.length) {  // Check if index is valid
        habits.splice(index, 1);    // Remove value at index
        localStorage.setItem('habits', JSON.stringify(habits));
    }
    else {
        console.log("Index error...");
    }

    indexInputElement.value = ""; // Reset text box
    showHabits(); // Reload habits on page
}

function clearHabits() {

    let habits = [];
    localStorage.setItem('habits', JSON.stringify(habits));
    showHabits();
}

function getHabits() {

    return JSON.parse(localStorage.getItem('habits')) || [];
}

function showHabits() {

    let habits = getHabits();

    const habitsListElement = document.getElementById("habitsList");    // get the html element

    habitsListElement.innerHTML = "";   // set element to blank

    const ul = document.createElement('ol'); // Create an ordered list

    habits.forEach((habit) => {

        const li = document.createElement('li'); // Create a list item
        li.textContent = habit; // Set the text to the habit
        ul.appendChild(li); // Append the list item to the unordered list
    });

    habitsListElement.appendChild(ul); // Append the unordered list to the habits list element
}

function submitHabit() {    // Refers to user entering habit into text box...

    let habitInputElement = document.getElementById("habitAddInput") // Get text within button

    let habit = habitInputElement.value;

    addHabit(habit);    // Push habit to local storage
    showHabits();   // Reload habits on page

    habitInputElement.value = "";   // Set text box blank
}

showHabits();