/*
Full description at:https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-6-using-the-browser-debugger
*/

'use strict';

async function getData(url) {
  const response = await fetch(url);
  return response.json();
}

function createAndAppend(name, parent, options = {}) {
  const nameEL = document.createElement(name);
  parent.appendChild(nameEL);
  Obj.entries(options).forEach(([key, value]) => {
    if (key === 'text') {
      nameEl.textContent = value;
    } else {
      nameEl.setAttribute(key, value);
    }
  });
  return nameEl;
}

function addTableRow(table, label, value) {
  const tr = createAndAppend('tr', table);
  createAndAppend('th', tr, { text: label });
  createAndAppend('td', tr, { text: value });
}

function renderLaureate(ul, { knownName, birth, death }) {
  const li = createAndAppend('li', ul);
  const table = createAndAppend('table', li);
  addTableRow(table, 'Name', knownName.en);
  addTableRow(table, 'Birth', `${birth.date}, ${birth.place.locationString.en}`);
  addTableRow(table, 'Death', death !== "Alive" ? `${death.date}, ${death.place.locationString.en}` : `Alive`);
}

function renderLaureates(laureates) {
  const ul = createAndAppend('ul', document.body);
  const laureateArray = laureates.filter((laureate)=> laureate.birth.place.country.en  === "the Netherlands")
  .map((laureate) => {
    return {
      knownName: laureate.knownName,
      birth: laureate.birth,
      ...((laureate.death) ? { death: laureate.death } : { death: 'Alive' })
    };
  });

  laureateArray.forEach(element => {
    renderLaureate(ul, element)
  });
}

async function fetchAndRender() {
  try {
    const laureates = await getData(
      'https://api.nobelprize.org/2.0/laureates?birthCountry=Netherlands&format=json&csvLang=en'
    );
    renderLaureates(laureates.laureates);
  } catch (err) {
    console.error(`Something went wrong: ${err.message}`);
  }
}

window.addEventListener('load', fetchAndRender);