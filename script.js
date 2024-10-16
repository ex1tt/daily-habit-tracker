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

    const urlParams = new URLSearchParams(window.location.search);
    const habitName = urlParams.get('name');    // retreive habit name based on url query

    let habits = getHabits();   // Get habits

    const index = habits.findIndex(h => h.name === habitName);   // retreive habit objects index based on habit name

    if (index > -1) {  // Check if index is valid

        habits.splice(index, 1);    // Remove value at index
        setHabits(habits);
        displayHabitInformation();
    }
}

function completeHabit() {

    const urlParams = new URLSearchParams(window.location.search);
    const habitName = urlParams.get('name');    // retreive habit name based on url query

    let habits = getHabits();   // Get habits

    const index = habits.findIndex(h => h.name === habitName);   // retreive habit objects index based on habit name

    if (index > -1) {  // Check if index is valid

        if(habits[index].completed) {
            habits[index].completed = false;
        }
        else {
            habits[index].completed = true;
        }
        setHabits(habits);  // Push new habits to local storage
        displayHabitInformation();
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

    const ul = document.createElement('ul'); // Create an ordered list

    habits.forEach((habit) => {

        const li = document.createElement('li'); // Create a list item
        const a = document.createElement('a');  // Create a link item

        a.href= `habit.html?name=${encodeURIComponent(habit.name)}` // Set the links aref to habit.html + a query with the name of habit
        a.textContent = `${habit.name} - ${habit.completed ? 'Completed' : 'Not Completed'}`; // Set the text to the habit link

        li.appendChild(a);  // Append link to the list
        ul.appendChild(li); // Append the list item to the unordered list
    });

    habitsListElement.appendChild(ul); // Append the unordered list to the habits list element
}

function submitHabit() {    // Refers to user entering habit into text box...

    let habitInputElement = document.getElementById("habitAddInput"); // Get text within button

    let habit = habitInputElement.value;

    if(!checkHabitExists(habit)) { // Check if habit exists first to avoid duplicates...

        addHabit(habit);    // Push habit to local storage
        location.assign("index.html");

        habitInputElement.value = "";   // Set text box blank
    }
}

function checkHabitExists(name) {

    let habits = getHabits();
    return habits.find(h => h.name === name) != null;
}

function displayHabitInformation() {

    let habits = getHabits();

    const urlParams = new URLSearchParams(window.location.search);

    const habitName = urlParams.get('name');    // retreive habit name based on url query

    // Warning: this means habit names must be unique!
    const habit = habits.find(h => h.name === habitName);   // retreive habit object based on habit name

    let headerElement = document.getElementById("habit-name");
    let statusElement = document.getElementById("habit-status");

    if(habit) {
        console.log(habit);      
        headerElement.textContent = `Habit: ${habit.name}`; // Set header to equal selected habit
        statusElement.textContent = `Status: ${habit.completed ? 'Completed' : 'Not Completed'}`;
    }
    else {
        headerElement.textContent = 'Habit: Null'
    }
}

console.log(getHabits());   // Debugging