const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']]; 

let addItem = function(num){
    theList.unshift(num);
};
let getItem = function(num){
    return theList.shift();
};

addItem("First");
console.log(theList);

console.log(getItem());

console.log(theList.slice(1,2));

addItem("last");
addItem("hello World");
addItem("Middle");


console.log(theList.splice(0,3));

