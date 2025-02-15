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
