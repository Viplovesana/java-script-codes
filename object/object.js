

 

//object = key:"value"

// let obj = {

//     name:"viplove",
//     age:23,
//     city:"bhoplal",
//     hobby:["reading","coding","dancing"],
//     greeting:function(){
//         console.log(` hello i am ${this.name} and i am ${this.age} year old`);
//     }
// }

// console.log(obj); //to acces the object...

// obj.hobby="reading"//to add additional key value in the object

// obj.age=24//to increase age in the key


// delete obj.city//to delete the key from the object 

// console.log(obj.hobby[1]);//to add array in object

// obj.greeting();

// const student= {

//     name:"viplove",
//     age:23,
//     city:"bhoplal",
//     hobby:["reading","coding","dancing"],

// };

// function destructuring(){


// const {name,age} = student;

// console.log(age);
// }



//.........spread......>>.......to combine two or more objects.. 

function spr(){

 

const student1 = {name:"viplove",age:"23"};
const student2 ={city:"new york",grade:"a"};

const combinedstudent = {...student1,...student2};

console.log(combinedstudent);

}
spr();


// //........normal fuction...//

// function okk(){

//     console.log("normal fuction")
// }okk();

//.......anonymous funtion.........//

// let go =function(){
//     console.log("anonymous fuction")

// }
// go()


// //......IIFE.......//immidiatly invoke function expression  

// (

//     function(){

//         console.log("IIFE")

//     }
// )()


//............Arrow function...../

// let arr = ()=>{

//     console.log("Arrow function")

// }
// arr()

// let obj ={

//     name:"viplove sana",
//     age:23,
//     city:"bhopal",
//     hobby:["reading","dancing","gyming",],
//     greeting:function(){
//         console.log(`hello i am ${this.name} and i am ${this.age}tear old`)

//     }


// }

// console.log(obj)

// obj.hobby="swimming"