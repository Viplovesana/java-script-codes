


let to ="i am viplove sana "  //string

let ok = ["viplove",23,"bhopal"]//array

//object = key:"value"

let obj = {

    name:"viplove",
    age:23,
    city:"bhoplal",
    hobby:["reading","coding","dancing"],
    greeting:function(){
        console.log(` hello i am ${this.name} and i am ${this.age} year old`);
    }
}

// console.log(obj);//to acces the object...

// obj.hobby="reading"//to add additional key value in the object

// obj.age=24//to increase age in the key

// delete obj.city//to delete the key from the object 

// console.log(obj.hobby[1]);//to add array in object

obj.greeting();