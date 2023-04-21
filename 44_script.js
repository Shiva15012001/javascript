function all_blank(){
    let fname =document.getElementById("f_name").value
    let lname = document.getElementById("l_name").value
    let male = document.getElementById("male").checked
    let female = document.getElementById("female").checked
    let others = document.getElementById("others").checked
    let date = document.getElementById("dob").value
    let address =document.getElementById("add").value
    let city =document.getElementById("city").value
    let email = document.getElementById ("mail").value
    let pass = document.getElementById("pass").value
    let cpass = document.getElementById("cpass").value
    let mb = document.getElementById("mob").value
    if(fname == "" || lname == "" || (male == false && female == false && others == false) || date == "" || add == "" || city == "-1" || email == "" || pass == "" || cpass == "" || mb == ""){
        document.getElementById("msg").innerHTML ="Enter your first name" 
        document.getElementById("msg1").innerHTML="Enter last name"
        document.getElementById("msg2").innerHTML ="Select your Gender"
        document.getElementById("msg3").innerHTML ="Enter Your Date Of Birth"
        document.getElementById("msg4").innerHTML ="Enter Your Address"
        document.getElementById("msg5").innerHTML ="Select Your city"
        document.getElementById("msg6").innerHTML ="Enter Your Email"
        document.getElementById("msg7").innerHTML ="Enter YOur password"
        document.getElementById("msg8").innerHTML ="confim Your Password"
        document.getElementById("msg9").innerHTML ="Enter Your mobile NUmber"
        
        return false
    }else{
        document.getElementById("msg").innerHTML =""
        document.getElementById("msg1").innerHTML =""
        document.getElementById("msg2").innerHTML =""
        document.getElementById("msg3").innerHTML =""
        document.getElementById("msg4").innerHTML = ""
        document.getElementById("msg5").innerHTML =""
        document.getElementById ("msg6").innerHTML =""
        document.getElementById("msg7").innerHTML =""
        document.getElementById("msg8").innerHTML =""
        document.getElementById("msg9").innerHTML =""
        return false
    }
} 


// hide show pass
function hide_show_pass(){
    let pass = document.getElementById("pass")
    let cpass = document.getElementById("cpass")
    if(pass.type == "password" && cpass.type == "password"){
        pass.type = "text"
        cpass.type ="text"
    }else{
        pass.type = "password"
        cpass .type = "password"
    }
}

