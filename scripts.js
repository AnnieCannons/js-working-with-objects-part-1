/**********************************************************************
* AFTER EACH STEP WHERE YOU WRITE CODE, EITHER LOG THE RESULT TO THE
CONSOLE USING CONSOLE.LOG(), OR CHECK THE VALUE IN THE CONSOLE BY
TYPING IT IN AND PRESSING ENTER. MAKE SURE YOU HAVE THE VALUE YOU
EXPECT! *
**********************************************************************/



// This is the template I used to create a button with a function that held the assignments code and a trigger to print specific text to HTML and send logs to the console

// exercise #
// <button onclick="myFunction#()">Exercise#</button> // this creates a button

// <p id="exercise1"></p> // this is the id tag for where the text I want printed will go

// <script>

// function myFunction# () { // function tag 
  
// let text; // this says there is a text variable we will define that variable later in the code

// code // this is where I put all the code but I could have also put the code directly in the js file and just referenced the tags here. 

// text = answer; // this is the text that will get printed

// console.log(answer); // this will log whatever I write into the console. They will show up in the order they are written.

// document.getElementById("exercise#").innerHTML = text; // this links the <p id=exercise#> tag so it is printed there in the HTML document
// }

// /********************** Exercise 1 - Creating Objects **********************/


//VIEW INDEX.HTML IN LIVE SERVER FOR ANSWERS

let user1 = {
  name: "Rose Smith",
  age: 36,
  language: "English",
  programmer: true,
};


// Create a variable called "user2" that points to a new object. That object should hve the same keys as "user1", but different values, representing you—that is, it should have your name, your age, etc. Use the "user1" object above as a reference.

let user2 = {
  name: "Hailey",
  age: 26,
  language: "English",
  programmer: true,
};

// Log the variable's value in the console.

// Create a variable called "dino1" that points to a new object. It should have the keys "name", "species", and "diet". The values should be "T-Rex", "Tyrannosaurus Rex", and "carnivore", respectively.

let dino1 = {
  name: "T-Rex",
  species: "Tyrannosaurus Rex",
  diet: "carnivore",
};

// Log the variable's value in the console.

// Create an object to hold information on your favorite recipe. It should have properties for:

// Title (a string, name of recipe)
// Servings (a number)
// Ingredients (an array of strings)

let recipe = {
  title: "PB&J",
  servings: "could be shared but don't touch mine",
  ingredients: ['peanut butter', 'jelly', 'bread' ]
};

// Log the object to the console.


function myFunction1() {
  console.log('Exercise 1\n \n')
  console.log('User1: ' + user1)
  console.log('User2: ' + user2)
console.log('Dino1: ' + dino1)
console.log('Recipe: ' + recipe)
}

/********************** Exercise 2 - Accessing Values **********************/

// Create a variable that holds the value of the "title" key in the "recipe" object you created above.

let recipeTitle = recipe.title 

// Log the value of that variable to the console.

// Create a variable that holds the value of the "name" key in the "user1" object from the previous exercise.

let userName1 = user1.name 

// Log the value of that variable to the console.

// WITHOUT creating a new variable, log the value of the "name" key in the "user1" object to the console.



// Log the value of the "age" key in the "user2" object to the console. You can create a new variable or log the value directly.

let user3 = {
  name: "Rose Smith",
  age: 36,
  language: ["English", "Spanish"],
  programmer: true,
};

// Log the value of the "language" key in the "user3" object to the console.

let user3Language = user3.language

// Put the value of the "language" key in the "user3" object into a new variable. Log the value of the first language in that array to the console using an index.



// WITHOUT creating a new variable or accessing the one you just created, log the value of the first language in the "languages" array to the console. You'll have to use BOTH dot notation to access the "languages" array, and square bracket notation to access the first element in that array, all in the same line.

function myFunction2() {

console.log('\n\nExercise 2:\n\n')
 console.log("Recipe Title from a new variable: ", recipeTitle);
    console.log('User1 name with a new variable: ', userName1);
    console.log('User1 name w/o a new variable: ', user1.name);
    console.log('User2 age w/o a new variable: ', user2.age);
    console.log('User3 language: ', user3.language);
    console.log("User3's language key w/ a new variable: ", user3Language);
    console.log('User3 first language from language key  w/o a new variable: ', user3.language[0]);
}

/********************** Exercise 3 - Adding Values **********************/

let dino2 = {};

// ALL OF THE STEPS BELOW SHOULD BE DONE WITHOUT CHANGING THE CODE ABOVE.

// Add a key-value pair to the above empty "dino2" object. The key should be "name", and the value should be "Raptor".

// Add a key-value pair to the "dino2" object. The key should be "species", and the value should be "Velociraptor".

// Add a key-value pair to the "dino2" object. The key should be "diet", and the value should be "carnivore".

// Log the "dino2" object to the console.

let dino3 = {
  name: "Raptor",
  diet: "carnivore",
};

// ALL OF THE STEPS BELOW SHOULD BE DONE WITHOUT CHANGING THE CODE ABOVE.

// Add a key-value pair to the "dino3" object. The key should be "species", and the value should be "Velociraptor".

// Now create a dino4 object with the name and species keys. The values should be "Triceratops" and "Triceratops Horridus", respectively.

// Add a key-value pair to the "dino4" object. The key should be "diet", and the value should be "herbivore".

// Log the "dino4" object to the console.

function myFunction3() {

  console.log('\n\nEXERCISE 3\n\n');

  dino2.name = "Raptor";
  dino2.species = "Velociraptor";
  dino2.diet = "Carnivore";

  console.log('Dino2: ', dino2);
  dino3.species = "Velociraptor";

  let dino4 = {
    name: "Triceratops",
    species: "Triceratops Horridus"
  }

  dino4.diet = "Herbivore";

  console.log('Dino4: ', dino4);

}

/********************** Exercise 4 - Changing Values **********************/

let dino5 = {
  name: "Triceratops",
  species: "Triceratops Horridus",
  diet: "herbivore",
};

// ALL OF THE STEPS BELOW SHOULD BE DONE WITHOUT CHANGING THE CODE ABOVE.

// Change the value of the "diet" key in the "dino5" object to "omnivore".

// Log the "dino5" object to the console.

// Change the value of the "name" key in the "dino5" object to "Sarah".

// Log the "dino5" object to the console.

let prettyGoodBook = {
  title: "The Hobbit",
  price: 14.99,
  rating: 4.5,
};

// ALL OF THE STEPS BELOW SHOULD BE DONE WITHOUT CHANGING THE CODE ABOVE.

// Change the value of the "price" key in the "prettyGoodBook" object to 12.99.

// Change the value of the "rating" key in the "prettyGoodBook" object to 5. (It's more than just pretty good!)

// Log the "prettyGoodBook" object to the console.

function myFunction4() {
  console.log('\n\nEXERCISE 4\n\n');

  dino5.diet = "ombivore";

  console.log('Dino5: ', dino5);
  dino5.name = "Sarah";
  console.log('Dino5 after name change: ', dino5);

  prettyGoodBook.price = 12.99;
  prettyGoodBook.rating = 5 + " (It's more than just pretty good!)";

  console.log('PrettyGoodBook: ', prettyGoodBook);
}
