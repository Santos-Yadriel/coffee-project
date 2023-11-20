"use strict"
const coffeeSearch = document.querySelector('#coffee-search');
function renderCoffee(coffee) {
    let html = '<section class="coffee">';
    html += `<div id="${coffee.id} ${coffee.roast}"><h4>${coffee.name}</h4><p>${coffee.roast}</p> </div>`;
    html += '</section>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault();
    const selectedRoast = roastSelection.value;
    const searchTerm = coffeeSearch.value.toLowerCase(); // Convert to lowercase for case-insensitive search

    const filteredCoffees = coffees.filter(coffee => {
        const isRoastMatch = selectedRoast === 'all' || coffee.roast === selectedRoast;
        const isNameMatch = coffee.name.toLowerCase().includes(searchTerm);
        return isRoastMatch && isNameMatch;
    });

    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
const coffees = [
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

const tbody = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit');
const roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees.reverse());

submitButton.addEventListener('click', updateCoffees);
coffeeSearch.addEventListener('input', updateCoffees);
