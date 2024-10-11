function getHabits() {
    return JSON.parse(localStorage.getItem('habits')) || [];
}

function setHabits(habits) {
    return localStorage.setItem('habits', JSON.stringify(habits));
}

function addHabit(habit) {

    if(habit) { // check argument is not blank/null

        let habits = getHabits();  // Grab habits from local storage

        habits.push({name: habit, completed: false}); // Push new habit key-value pair -> completed initialized as false

        setHabits(habits); // Pass the new object array back into storage
    }
}

function removeHabit() {

    indexInputElement = document.getElementById("habitIndexInput");

    let index = indexInputElement.value -1;

    let habits = getHabits();

    if (index > -1 && index < habits.length) {  // Check if index is valid

        habits.splice(index, 1);    // Remove value at index
        setHabits(habits);

        indexInputElement.value = ""; // Reset text box
        showHabits(); // Reload habits on page
    }
}

function completeHabit() {

    indexInputElement = document.getElementById("habitIndexInput"); // Get index element

    let index = indexInputElement.value -1; // Get index from element

    let habits = getHabits();   // Get habits

    if (index > -1 && index < habits.length) {  // Check if index is valid

        habits[index].completed = true;    // Set corrseponding habit value to completed
        setHabits(habits);  // Push new habits to local storage

        indexInputElement.value = ""; // Reset text box
        showHabits();   // Refresh habits...
    }
}

function clearHabits() {

    let habits = [];
    setHabits(habits);
    showHabits();
}

function showHabits() {

    let habits = getHabits();

    const habitsListElement = document.getElementById("habitsList");    // get the html element

    habitsListElement.innerHTML = "";   // set element to blank

    const ul = document.createElement('ol'); // Create an ordered list

    habits.forEach((habit) => {

        const li = document.createElement('li'); // Create a list item
        li.textContent = `${habit.name} - ${habit.completed ? 'Completed' : 'Not Completed'}`; // Set the text to the habit
        ul.appendChild(li); // Append the list item to the unordered list
    });

    habitsListElement.appendChild(ul); // Append the unordered list to the habits list element
}

function submitHabit() {    // Refers to user entering habit into text box...

    let habitInputElement = document.getElementById("habitAddInput"); // Get text within button

    let habit = habitInputElement.value;

    addHabit(habit);    // Push habit to local storage
    showHabits();   // Reload habits on page

    habitInputElement.value = "";   // Set text box blank
}

console.log(getHabits());   // Debugging
showHabits();   // Load habits on start...