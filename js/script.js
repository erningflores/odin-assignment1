const output = document.querySelector("#output");
const submit = document.querySelector("#submit");
let strOutput = "";

let john = {
    name: "John",
    surname: "Smith",
    age: 25,
    id: 1,
}
let pete = {
    name: "Pete",
    surname: "Hunt",
    age: 30,
    id: 2,
}
let mary = {
    name: "Mary",
    surname: "Key",
    age: 28,
    id: 3,
}

let users = [john, pete, mary];
// convert it to an array of names
let names = function(){
    let arr = [];
    for(let i=0; i<users.length; i++){
        arr.push(users[i].name);
        console.log(arr[i]);
    }
    return arr;
};

const userNames = users.map(element => element.name);
const userFullNames = users.map(element => (
    {
        fullName: `${element.name} ${element.surname}`,
        id: element.id,
    }
));

for(let key in userFullNames){
    console.log(userFullNames[key]);
}

//sortting by age
function sortByAge(){
    let arr = users.sort((arg1, arg2) => arg1.age - arg2.age);
    return arr;
}
const sortedObjects = sortByAge();
for(let key in sortedObjects){
    console.log(sortedObjects[key]);
}

function getAverage(arr){
    return arr.reduce((prev, accu) => prev + accu.age, 0)/arr.length;
}

submit.addEventListener('click', event => {
    event.preventDefault();

    strOutput += `array names: ${names()} \n`;
    strOutput += `mapping names: ${userNames} \n`;
    strOutput += `mapping fullNames: ${userFullNames} \n`;
    strOutput += `sorting by age: ${sortedObjects} \n`;
    strOutput += `the average age is: ${Math.floor(getAverage(users), 2)} \n`;
    output.textContent = strOutput;
});