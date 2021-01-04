const car = {
    make : "ford",
    model : "mustang",
    color : "black",
    type : "sedan",
    tires : "firestone",
    mode : "sport",
    gasoline : "super"
   }

   //Print the object above to the console.
       console.log(car)
   

   //Write a function that takes an object as an argument and prints it to the console.
   function printObj (obj){
    console.log(car);
   }

   //Delete the gasoline property from the object. Also print the object before or after deleting the property.
   delete car.gasoline;
   for (let key in car){
    console.log(`${key}: ${car[key]}`)
}

//Write a function that returns the object keys as an array.
function printKeys {
    console.log(obj.keys(car));
   }

//Write a function that returns the object's values as an array.
   function printVal()
console.log(Object.values(car));

//Add two more properties to the object tints: 33% and carplay: true. Print to the console to make sure properties were added.
car.tints = "33%";
car.carplay = true;
console.log(car);

//Add a method called startEngine with the following:
//When method is called, it prints "VROOM VROOM" to the console.
//Contains a variable engineOn with a boolean value set to true.

car.startEngine = function(){
 console.log("VROOM VROOM")
 car.engineOn = true;
}

// Add a method called turnOffEngine with the following:
//When method is called, it prints "car turned off" to the console.
//Contains a variable engineOn with a boolean value set to false
car.turnOffEngine = function(){
    console.log("car turned off")
    car.engineOn = false;
   }

//Write a loop that iterates through the above object's properties. Hint: You will need to turn the object into an array using 1 of 3 object methods in order to loop through it.
for(let prop in car){
    console.log(`${prop}: ${car[prop]}`);
}

// Using the directions below, create an object:
//Choose one of the following: duck, eagle, or penguin.
//Add an array to the object called favoriteFood, listing the 3-5 favorite foods of the bird.
//Provide the object with 4 key:value pairs, one of which being a boolean value named canFly.
//This object should contain 3 methods named chirpSound, birdDiet, and fly.
//The fly method must contain a conditional based on if the bird you chose can fly or not.
//If the bird can fly, the method when called will output I live in the sky, if not then the method will output I'd like to stay on the ground.

let duck = {
 favoriteFood = ["bread", "berries", "algae" ],
 color: "yellow",
 age: 3,
 wingspan: 10,
 canFly: true, 
 chirpSound: function(){
    console.log("Quack!");
},
birdDiet: function(){
    console.log(this.favoriteFood);
},
fly: function(){
    if(this.canfly == true){
        console.log('I live in the sky');
    } else{
        console.log("I'd like to stay on the ground");
    } 
}
}

//Create another object called house that contains the following:
//A total of 10 key value pairs.
//2 of the values should be booleans.
//Should contain 1 array.
//Should contain 3 methods.
//1 method should contain a conditional.
//At least 1 of the values should be an object that has 3 key value pairs.
let house = {
    residents: ["mother", "father", "daughter"], 
    locked: true,
    paidMortgage: true,
    levels: {top: "attic", middle: "base floor", bottom: "basement"},
    numberOfWindows: 5,
    color: red,
    numberOfrooms: 7,
    openWindow: function(){
    console.log("The windows are now open.")
    },
    closeWindow: function(){
     console.log.apply("The windows are now closed.")
    },
    isLocked: function(){
        if (this.locked == true){
            console.log("The house is locked.")
        }
        else{
         console.log("The house is unlocked.")
        }
    },
}