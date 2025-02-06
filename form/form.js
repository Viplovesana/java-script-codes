

let sub=()=>{

    let inpname=document.querySelector("#name").value
    let inpnum=document.querySelector("#number").value
    let inpemail=document.querySelector("#email").value
    let inppass=document.querySelector("#pass").value
    let inpcpass=document.querySelector("#cpass").value

    let errname=document.querySelector("#errname")
    let errnum=document.querySelector("#errnum")
    let email=document.querySelector("#erremail")
    let errpass=document.querySelector("#errpasss")
    let errcpass=document.querySelector("#errcpass")

    if(inpname==""){
        errname.innerHTML="pleas enter the name"
        errname.style.color="red"
        return false
    
    }




}