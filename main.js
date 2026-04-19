
const student = [
    {name: "luul", age:25, city: "iceland"},

    {name: "Ahmed", age:35, city: "masar"},

    {name: "Ali", age:17, city: " Qaahira"},
];

        console.log("properties and values of each person:")
        for (const person of student){
            for (const key in person){
                console.log( key + ":"+ person[key]);
            }
               console.log("----");
        }