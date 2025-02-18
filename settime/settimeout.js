// console.log("running")

// let runn=()=>{

//     setTimeout( ()=>{

//         console.log("run");

//     } ,4000)
// }


// let runn =()=>{
//     let count = 0

// let inter=setInterval(()=>{

//     console.log(count);
//     count++;
// },2000)

// }




// let stop=()=>{

//     clearInterval(inter)

// };

let stop = () => {

    let inpnumber = document.querySelector("#number").value;
    let count=inpnumber

 let inter= setInterval(()=>{

    let saw=document.querySelector("#showw") 
        saw.innerHTML=(count);
    
    count--;
    
},1000)

}

let time = new Date();

console.log(time)
console.log("year ="+time.getFullYear())
console.log("month = "+    time.getMonth());
console.log(  "date = "+   time.getDate());
console.log     ("time + "+   time.getHours());
console.log( "Minutes = "  + time.getMinutes());
console.log("Seconds = "+     time.getSeconds());

let arr =["SUnday","tuesday","wednesday","thursday","Friday","Saturday"];
console.log(arr[time.getDay()])

let year = time.getFullYear();
console.log(year)

let month = time.getMonth();
console.log(month)

let date = time.getDate();
console.log(date)
let hours = time.getHours();
console.log(hours)

let day = time.getDay();
console.log(day)

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(days[0])

setInterval(() => {
  let time = new Date();

  let arr2 = ["Jan", "Feb", "March", "April", "May", "Saturday"];
  console.log(arr2[time.getMonth()]);

  let timer = document.querySelector(".timer");
  timer.innerHTML = ${time.getHours()}.${time.getMinutes()}.${time.getSeconds()};
  console.log(time.toLocaleString()); ///redable format
}, 1000);


function submit() {
    let timer = document.querySelector(".inp").value;
    let heading = document.querySelector(".head");
    let time = new Date().getFullYear();
    let age = time - timer;
    heading.innerHTML = You are ${age} years old;
  }
  
  
//   input  you are 25 years old showing
//   given yar - present years
