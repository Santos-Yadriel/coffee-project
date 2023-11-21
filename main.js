"use strict";

const coffeeSearch = document.querySelector('#coffee-search');
// const submitButton = document.querySelector('#submit');
const tbody = document.querySelector('#coffees');

function renderCoffee(coffee) {
    let html = '<section id="card" class="coffee">';
    html += `<div id="${coffee.id}"><h3>${coffee.name}</h3><p>${coffee.roast}</p></div>`;
    html += '</section>';
    return html;
}

function renderCoffees(coffees) {
    // Sort the coffees array by id in ascending order
    const sortedCoffees = coffees.sort((a, b) => b.id - a.id);

    let html = '';
    for (let i = sortedCoffees.length - 1; i >= 0; i--) {
        html += renderCoffee(sortedCoffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault();
    const selectedRoast = roastSelection.value.toLowerCase();
    const searchTerm = coffeeSearch.value.toLowerCase();

    const filteredCoffees = coffees.filter(coffee => {
        const isRoastMatch = selectedRoast === 'all' || coffee.roast.toLowerCase() === selectedRoast;
        const isNameMatch = coffee.name.toLowerCase().includes(searchTerm);
        return isRoastMatch && isNameMatch;
    });

    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from
const coffees =JSON.parse(localStorage.getItem('coffees')) ||[
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

const roastSelection = document.querySelector('#roast-selection');
const addCoffeeForm = document.querySelector('#add-coffee-form');

addCoffeeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let coffeeName = document.querySelector('#add-coffee-name').value;
    let roastSelectElement = document.querySelector('#add-coffee-roast');
    let selectedRoast = roastSelectElement.options[roastSelectElement.selectedIndex].text;
    let newCoffee = {
        id: coffees.length + 1,
        name: coffeeName,
        roast: selectedRoast
    };
    coffees.push(newCoffee);
    localStorage.setItem('coffees', JSON.stringify(coffees));
    tbody.innerHTML = renderCoffees(coffees);
    addCoffeeForm.reset();
});



tbody.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', updateCoffees);
coffeeSearch.addEventListener('input', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);




// ******************** new style ***************

const coffee_name = document.querySelector(".coffee_name");
const coffee_filling = document.querySelector(".filling");
const buttons = document.querySelectorAll("button");
let current_element = null;

const changeCoffeeType = (selected) => {
    if (current_element) {
        current_element.classList.remove("selected");
        coffee_filling.classList.remove(current_element.id);
    }
    current_element = selected;
    coffee_filling.classList.add(current_element.id);
    current_element.classList.add("selected");
    coffee_name.innerText = selected.innerText;
};

const setActiveType = (element) => {
    element.toggleClass("selected");
};

[...buttons].forEach((button) => {
    button.addEventListener("click", () => {
        changeCoffeeType(button);
    });
});