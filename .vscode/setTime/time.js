//set timout


// const btnEle=document.querySelector(".btn")
// const btnstop=document.querySelector(".btn2")

// let timeid;
// btnEle.addEventListener("click",()=>{
//     timeid=setTimeout(()=>{
//         console.log("this is my settime you clicked on button")
//     },3000)
//     console.log("this is viplove here")
// });

// btnstop.addEventListener("click",()=>{
//     clearTimeout(timeid)
// })




//this keywords.............

const person ={
    name:"viplove",
    greet:function(){
        console.log("welcome "+this.name);
    }
};
person.greet();