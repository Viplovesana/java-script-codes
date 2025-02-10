


// console.log(Math.PI);

// console.log(Math.random()*10);

// console.log(Math.floor(Math.random()*9000+1000));

let roll=()=>{

   let dice=Math.floor(Math.random()*6+1);
   let para =document.querySelector(".para");

   if(dice==1){

    para.innerHTML ="One"

   }
   else if (dice==2){

    para.innerHTML ="Two"
   }




}