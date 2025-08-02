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
