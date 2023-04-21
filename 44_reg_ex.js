function fnreg_ex(){
    let fname =document.getElementById("f_name").value
    let fname_reg_ex = /^[a-zA-z]*$/
    if(fname_reg_ex.test(fname)){
        document.getElementById("msg").innerHTML="ture"
        return false
    }else{
        document.getElementById("msg").innerHTML="alphabet not allowed"
        return false
    }
}
// last name
function reg_ex(){
    let lname = document.getElementById("l_name").value
    let lname_reg_ex = /^[a-zA-z]*$/
    if(lname_reg_ex.test(lname)){
        document.getElementById("msg1").innerHTML ="ture"
        return false
    }else{
        document.getElementById("msg1").innerHTML ="alphabet not allowed"
        return false
    }
}
// address
function check_add(){
    let address =document.getElementById("add").value
    if(address.length < 15){
        document.getElementById("msg4").innerHTML ="enter atlist 15 charectors"
        return false
    }else{
        document.getElementById("msg4").innerHTML ="enter atlist 15 charectors"
        return false;
    }
}
// email
function check_email(){
    let email = document.getElementById ("mail").value
    let reg_ex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(reg_ex_email.test(email)){
        document.getElementById("msg6").innerHTML ="ture"
        return false
    }else{
        document.getElementById("msg6").innerHTML ="Invalid....."
        return false
    }
}

// ======password=====
function check_pass(){
    let pass = document.getElementById("pass").value
    let pass_reg_ex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/;
    if(pass_reg_ex.test(pass)){
        document.getElementById("msg7").innerText ="ture"
        return false
    }else{
        document.getElementById("msg7").innerText ="password must ne enter 12 charecters"
        return false
    }
}
// confirm password
function confirm_pass(){
    let pass = document.getElementById("pass").value
    let cpass = document.getElementById("cpass").value 
    if(cpass != pass){
        document.getElementById("msg8").innerText ="does not match"
        return false
    }else{
        document.getElementById("msg8").innerText=""
        return false
    }
}
// mobile 
function check_mobile(){
    let mb = document.getElementById("mob").value
    let reg_ex = /^[0-9]*$/
    if(reg_ex.test(mb)){
        document.getElementById("msg9").innerHTML ="ture"
        return false
    }else{
        document.getElementById("msg9").innerHTML ="alphabit not allowed"
        return false
    }
} 
// check length

  function check_length(){
    let mb = document.getElementById("mob").value
    if(mb.length < 10){
        document.getElementById("msg9").innerHTML = "enter proper number"
        return false
    }else{
        document.getElementById("msg9").innerHTML ="alphabit not allowed"
        return false
    }
  }
