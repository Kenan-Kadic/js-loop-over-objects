'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// OBJECT LOOPING

// property names are also called keys

const properties = Object.keys(restaurant.openingHours);
console.log(properties)
// gives you an array with keys

// check length in object and keep adding the day by looping keys
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `
}
console.log(openStr);

// Property values
const values = Object.values(restaurant.openingHours);

// ENTRIES is keys + values together
let entries = Object.entries(restaurant.openingHours);
console.log(entries)
//gives you an array

// when it is not destructured
// for(const x of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// when it is destructured and you take out key open and close
for(const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

