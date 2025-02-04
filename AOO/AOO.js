//...........ARRAY OF OBJECT..............//


let students = [{

    name:"sid",
    age:25,
    city:"bhopal"
},{
    name:"faraz",
    age:24,
    city:"jabalpur"
},{
    name:"annanya",
    age:21,
    city:"indore"
},{
    name:"viplove",
    age:23,
    city:"bhopal"
}];

let display = document.querySelector("#datadisplay")



students.map((e)=>{

display.innerHTML+=`
<div>
<h1 id="name"> name:- ${e.name}</h1>
<h2>age:- ${e.age}</h2>
<h2>city:-${e.city}</h2>
</div>

`
}
)


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










