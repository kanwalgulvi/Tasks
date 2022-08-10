// 2. 
let carVar = "color";
// 1.
let myCar = {
     modelNo: 1234,
     color: "Black",
     is_Available: false, 
     // 2.
     name: carVar
};
// 2.
    myCar['name'] = 'White';
    console.log(myCar.name);