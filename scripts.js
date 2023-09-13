/**********************************************************************
* AFTER EACH STEP WHERE YOU WRITE CODE, EITHER LOG THE RESULT TO THE
CONSOLE USING CONSOLE.LOG(), OR CHECK THE VALUE IN THE CONSOLE BY
TYPING IT IN AND PRESSING ENTER. MAKE SURE YOU HAVE THE VALUE YOU
EXPECT! *
**********************************************************************/

/********************** Exercise 1 - Creating Objects **********************/

let user1 = {
  name: "Rose Smith",
  age: 36,
  language: "English",
  programmer: true,
};
const user2 = {
  name: "Taylor Lange",
  age: 28,
  language: "English",
  programmer: true,
};

// Create a variable called "user2" that points to a new object. That object should hve the same keys as "user1", but different values, representing you—that is, it should have your name, your age, etc. Use the "user1" object above as a reference.

// Log the variable's value in the console.

// Create a variable called "dino1" that points to a new object. It should have the keys "name", "species", and "diet". The values should be "T-Rex", "Tyrannosaurus Rex", and "carnivore", respectively.

const dino1 = {
name: "T-Rex",
species: "Tyrannosaurus Rex",
diet: "carnivore",
};

// Log the variable's value in the console.

// Create an object to hold information on your favorite recipe. It should have properties for:

// Title (a string, name of recipe)
// Servings (a number)
// Ingredients (an array of strings)

const recipe = {
  title: "Honey Lavender Cold Brew",
servings: 4, 
ingredients: ["ground coffee beans", "fresh lavender", "honey", "vanilla bean", "milk or creamer, to taste"]
};

// Log the object to the console.

/********************** Exercise 2 - Accessing Values **********************/

// Create a variable that holds the value of the "title" key in the "recipe" object you created above.

let recipeTitle = recipe.title;

// Log the value of that variable to the console.

// Create a variable that holds the value of the "name" key in the "user1" object from the previous exercise.

let user1Name = user1.name;

// Log the value of that variable to the console.

// WITHOUT creating a new variable, log the value of the "name" key in the "user1" object to the console.
console.log(user1.name);

// Log the value of the "age" key in the "user2" object to the console. You can create a new variable or log the value directly.

console.log(user2.age);

let user3 = {
  name: "Rose Smith",
  age: 36,
  language: ["English", "Spanish"],
  programmer: true,
};
user3.language;
// Log the value of the "language" key in the "user3" object to the console.

// Put the value of the "language" key in the "user3" object into a new variable. Log the value of the first language in that array to the console using an index.
let user3Language = user3.language;

user3.language[0];
// WITHOUT creating a new variable or accessing the one you just created, log the value of the first language in the "languages" array to the console. You'll have to use BOTH dot notation to access the "languages" array, and square bracket notation to access the first element in that array, all in the same line.

user3.language[0];
/********************** Exercise 3 - Adding Values **********************/

let dino2 = {};

// ALL OF THE STEPS BELOW SHOULD BE DONE WITHOUT CHANGING THE CODE ABOVE.

// Add a key-value pair to the above empty "dino2" object. The key should be "name", and the value should be "Raptor".

dino2.name = "Raptor";

// Add a key-value pair to the "dino2" object. The key should be "species", and the value should be "Velociraptor".

dino2["species"] = "Velociraptor";

// Add a key-value pair to the "dino2" object. The key should be "diet", and the value should be "carnivore".

dino2.diet = "Carnivore";

// Log the "dino2" object to the console.

console.log(dino2);

let dino3 = {
  name: "Raptor",
  diet: "carnivore",
};

// ALL OF THE STEPS BELOW SHOULD BE DONE WITHOUT CHANGING THE CODE ABOVE.

// Add a key-value pair to the "dino3" object. The key should be "species", and the value should be "Velociraptor".

dino3.species = "Velociraptor";

// Now create a dino4 object with the name and species keys. The values should be "Triceratops" and "Triceratops Horridus", respectively.

let dino4 = {
  name: "Triceratops",
species: "Triceratops Horridus",
};

// Add a key-value pair to the "dino4" object. The key should be "diet", and the value should be "herbivore".

dino4.diet = "Herbivore";

// Log the "dino4" object to the console.

console.log(dino4);
/********************** Exercise 4 - Changing Values **********************/

let dino5 = {
  name: "Triceratops",
  species: "Triceratops Horridus",
  diet: "herbivore",
};

// ALL OF THE STEPS BELOW SHOULD BE DONE WITHOUT CHANGING THE CODE ABOVE.

// Change the value of the "diet" key in the "dino5" object to "omnivore".

dino5.diet = "omnivore";

// Log the "dino5" object to the console.

// Change the value of the "name" key in the "dino5" object to "Sarah".

dino5["name"] = "Sarah";

// Log the "dino5" object to the console.

let prettyGoodBook = {
  title: "The Hobbit",
  price: 14.99,
  rating: 4.5,
};

// ALL OF THE STEPS BELOW SHOULD BE DONE WITHOUT CHANGING THE CODE ABOVE.

// Change the value of the "price" key in the "prettyGoodBook" object to 12.99.

prettyGoodBook.price  = 12.99;

// Change the value of the "rating" key in the "prettyGoodBook" object to 5. (It's more than just pretty good!)

prettyGoodBook.rating = 5;

// Log the "prettyGoodBook" object to the console.
