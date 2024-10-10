function addHabit(habit) {

    let habits = JSON.parse(localStorage.getItem('habits')) || [];

    habits.push(habit);

    localStorage.setItem('habits', JSON.stringify(habits));
}

function removeHabit(index) {

    let habits = JSON.parse(localStorage.getItem('habits')) || [];

    if (index > -1 && index < habits.length) {
        habits.splice(index, 1);
        localStorage.setItem('habits', JSON.stringify(habits));
    }
    else {
        console.log("Index error...");
    }
}

function deleteHabits() {

    let habits = [];
    localStorage.setItem('habits', JSON.stringify(habits));
}

function getHabits() {

    return JSON.parse(localStorage.getItem('habits')) || [];
}

function showHabits() {

    let habits = getHabits();

    const habitsListElement = document.getElementById("habitsList");    // get the html element

    habitsListElement.innerHTML = "";   // set element to blank

    const ul = document.createElement('ul'); // Create an unordered list

    habits.forEach((habit) => {

        const li = document.createElement('li'); // Create a list item
        li.textContent = habit; // Set the text to the habit
        ul.appendChild(li); // Append the list item to the unordered list
    });

    habitsListElement.appendChild(ul); // Append the unordered list to the habits list element
}


showHabits();