// 2. 
let carVar = "color";
// 1.
let myCar = {
     modelNo: 1234,
     make: "BMW",
     color: "Black",
     is_Available: false, 
     // 2.
     name: carVar
};
console.log(myCar.modelNo, myCar.make);
// 2.
//Square Bracket notation
    myCar['name'] = 'White';
 
// .3
    myCar.name = "forSale";
    myCar['name'] = false;
    console.log(myCar.name)

