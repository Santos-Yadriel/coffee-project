"use strict";

const coffeeSearch = document.querySelector('#coffee-search');
const submitButton = document.querySelector('#submit');
const tbody = document.querySelector('#coffees');

function renderCoffee(coffee) {
    let html = '<tr class="coffee">';
    html += `<td>${coffee.id}</td>`;
    html += `<td>${coffee.name}</td>`;
    html += `<td>${coffee.roast}</td>`;
    html += '</tr>';
    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for (let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
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



tbody.innerHTML = renderCoffees(coffees.reverse());

// submitButton.addEventListener('click', updateCoffees);
coffeeSearch.addEventListener('input', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
