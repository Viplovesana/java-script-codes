//...........ARRAY OF OBJECT..............//


// let students = [{

//     name:"sid",
//     age:25,
//     city:"bhopal"
// },{
//     name:"faraz",
//     age:24,
//     :city:"jabalpur"
// },{
//     name:"annanya",
//     age:21,
//     city:"indore"
// },{
//     name:"viplove",
//     age:23,
//     city:"bhopal"
// }];

// let display = document.querySelector("#datadisplay")



// students.map((e)=>{

// display.innerHTML+=`
// <div>
// <h1 id="name"> name:- ${e.name}</h1>
// <h2>age:- ${e.age}</h2>
// <h2>city:-${e.city}</h2>
// </div>

// `
// }
// )


// //MAP, FILTER, FOREACH .......................//


// //........MAP......//

// let arr1 = [4,7,8,9,4,9]

// let ans = arr1.map((event)=>{

//     return event*2
// })

// console.log(ans);


// //....filter...............//

// let ans2 = arr1.filter((e)=>{

//     return e%2==0
// })
// console.log(ans2)

// //........foreach,,,///

//  arr1.forEach((e)=>{

//     console.log(e%2==0)

  
// })


// let students = [
//     {name:"viplove ",age:23,city:"bhoplal",},
//     {name:"faraz",age:26,city:"bhoplal",},
//     {name:"zaid",age:23,city:"bhoplal",},
//     {name:"annanya",age:22,city:"bhoplal",},
//     {name:"piyush",age:20,city:"bhoplal",},
//     {name:"avichal",age:24,city:"bhoplal",},
// ]

// let format=document.querySelector("#datatable")

// students.map((e)=>{

//     format.innerHTML+=`
//     <tr>
//     <td id="name">name:- ${e.name}</td>
//     <td>age:- ${e.age}</td>
//     <td>city:- ${e.city}</td>
//     </tr>
//     `
// })


let students=[
    {name:"viplove",age:23,city:"bhopal",},
    {name:"sanidhya",age:24,city:"bhopal",},
    {name:"aliyaa",age:25,city:"bhopal",},
    {name:"faraz",age:26,city:"bhopal",},
    {name:"zaid",age:27,city:"bhopal",},
    {name:"annanya",age:28,city:"bhopal",},
    {name:"juttin",age:28,city:"bhopal",},
    {name:"sourabh",age:29,city:"bhopal",},
    {name:"anmol",age:30,city:"bhopal",},
    {name:"nirmal",age:21,city:"bhopal",},
    {name:"ishika",age:22,city:"bhopal",},
    {name:"somay",age:23,city:"bhopal",},
]

let table=document.querySelector("#datadisplay")

students.map((e)=>{
    table.innerHTML+=`
    <tr>
    <td id="name">${e.name}</td>
      <td>${e.age}</td>
        <td>${e.city}</td>
        </tr>

    `
})





 




