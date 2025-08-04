// Problem 1 (Declare an Array)
const fruits = ["Mango", "Lichi", "Banana", "Apple", "Pineapple"];

console.log(fruits[3]);

fruits[2] = "jambura";

console.log(fruits);


// Problem 2 (Add or remove elements)

const tourist = ["Cox's Bazar", "Jaflong", "Shat Gombuj Mosque"];

tourist.push("Sreemangal");

tourist.push("Ratargul", "Sundarban");

tourist.pop();

console.log(tourist);


// Problem 3 (Checking Array Membership with 'includes')

const books = ["Rich dad poor dad", "Javascript", "You can't hurt me", "Miracle morning"];

if(books.includes("Javascript"))
{
    console.log("Javascript book available.");
}

else
{
    console.log("Javascript book not available.");
}


// Problem 4 (Checking if it's an array)

const places = ["Dhaka", "Khulna", "Rajshahi", "Barisal"];

const age = 28;

const fullName = "Menhajul Abir";

isConsistent = true;

if(Array.isArray(places))
{
    console.log("This variable is an array.");
}

else
{
    console.log("This variable is not an array.");
}

if(Array.isArray(age))
{
    console.log("This variable is an array.");
}

else
{
    console.log("This variable is not an array.");
}

if(Array.isArray(fullName))
{
    console.log("This variable is an array.");
}

else
{
    console.log("This variable is not an array.");
}

if(Array.isArray(isConsistent))
{
    console.log("This variable is an array.");
}

else
{
    console.log("This variable is not an array.");
}