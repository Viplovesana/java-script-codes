//...........ARRAY OF OBJECT..............//


// let Aoo = [{

//     name:"sid",
//     age:25,
//     city:"bhopal"
// },{
//     name:"faraz",
//     age:24,
//     city:"jabalpur"
// },{
//     name:"annanya",
//     age:21,
//     city:"indore"
// },{
//     name:"viplove",
//     age:23,
//     city:"bhopal"
// }];


//MAP, FILTER, FOREACH .......................//


//........MAP......//

let arr1 = [4,7,8,9,4,9]

let ans = arr1.map((event)=>{

    return event*2
})

console.log(ans);


//....filter...............//

let ans2 = arr1.filter((e)=>{

    return e%2==0
})
console.log(ans2)

//........foreach,,,///

 arr1.forEach((e)=>{

    console.log(e%2==0)

  
})








