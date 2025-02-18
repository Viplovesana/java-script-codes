let display = document.querySelector("#show")
let display2 = document.querySelector("#show2")

let login = ()=>{

    let username = document.querySelector("#username").value
    
    let username2 = document.querySelector("#username2").value

    localStorage.setItem("name",username)
    localStorage.setItem("age",username2)

    display.innerHTML=localStorage.getItem("name")
    display2.innerHTML=localStorage.getItem("age")

}

let logout = ()=>{


    display.innerHTML=localStorage.getItem("name")
    display2.innerHTML=localStorage.getItem("age")
    localStorage.removeItem("name")
    
    localStorage.removeItem("age")

    location.reload()

}