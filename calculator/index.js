
let store=''; //'1+2'  //
  
let dis=(value)=>{
let show = document.querySelector("#display")
store=store+value

show.innerHTML=store

}
let res=()=>{
    let show = document.querySelector("#display")

    show.innerHTML=eval(store)

    store=eval(store)
    store.toString()//to save no int form of string in the store

}

let del=()=>{

    let show = document.querySelector("#display")
    store=store.slice(0,-1)
    show.innerHTML=store

}

let allc=()=>{

    let show = document.querySelector("#display")
    show.innerHTML=""

}