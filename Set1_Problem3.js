
//                                CLASSES SECTION


class Person    //each person has a set of attributes, according to the reequirements of the problem
{
    constructor(first_name, last_name, favorite_color, favorite_food, birthday)
    {
        this.first_name = first_name;
        this.last_name = last_name;
        this.favorite_color = favorite_color;
        this.favorite_food = favorite_food;
        this.birthday = birthday;
    }
}


//                              METHODS SECTION


function checkRed(person)   //boolean-returning function, whether person's favorite color is red 
{
    return person.favorite_color === "red";
}

function separateRed(array1, array2)    //creating an array only with people who's favorite color is red
{
    for(let i = 0; i < array1.length; i++)
        if(checkRed(array1[i]))
            array2.push(array1[i]);
}

function Filter(array1)    //filtering an array by creating another that only has people who like red and then replacing values in the initial array
{
    const arr = [];
    separateRed(array1, arr);
    array1.length = 0;               
    array1.push.apply(array1, arr);
    
}

//                              BASICALLY MAIN


let Tim = new Person("Tim", "Carraway", "red", "pizza", "25.01.2000");
let Malia = new Person("Malia", "Haug", "blue", "bagel", "09.02.2006");
let Conrad1 = new Person("Conrad", "Hoffman", "red", "fries", "17.09.2005");
let Alex = new Person("Alex", "Khan", "blue", "burger", "10.01.2006");
let Dylan = new Person("Dylan", "Mercado", "red", "Taco", "17.11.2004");
let Mario = new Person("Mario", "Montenegro", "red", "pupusa", "09.02.2006");
let Lucas = new Person("Lucas", "Collado", "black", "curry", "13.06.2006");
let Conrad2 = new Person("Conrad", "Connor", "red", "enemies", "06.06.2066");
let Luka = new Person("Luka", "McDonald", "red", "pizza", "23.08.2019");
let Max = new Person("Max", "Busse", "blue", "pizza", "18.03.2006");
let Harper = new Person("Harper", "Dame", "cyan", "sushi", "10.05.2005");
let Jackson = new Person("Jackson", "Chartier", "red", "sandwich", "13.06.2006");
let Jett = new Person("Jett", "Subaru", "white", "takoyaki", "09.06.2042");
let Glotz = new Person("Glotz", "Darin", "red", "steak", "04.07.1980");
let Munger = new Person("Munger", "Judith", "green", "chocolate", "09.09.1974");

const group = [Tim, Malia, Conrad1, Alex, Dylan, Mario, Lucas, Conrad2, Luka, Max, Harper, Jackson, Jett, Glotz, Munger];  //creating an array which contains a group of people

Filter(group);

for(let i = 0; i < group.length; i++)   //checking to see contents of an array
    console.log(group[i].first_name + " " + group[i].last_name);














