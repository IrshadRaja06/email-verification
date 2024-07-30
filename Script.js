function validationform(){
    let firstname = document.validform.fname.value;
    let lastname = document.validform.lname.value;
    let email = document.validform.email.value;
    let regex = /^[a-zA-z0-9._]+@[a-z0-9]+\.[a-z]{2,}$/;

    if(firstname==="" || lastname==="" || email===""){
        alert("Fill all the Required Details");
        return false;
    }
    else if(!regex.test(email)){
        alert("Enter Valid Email Id");
        return false;
    }
    else{
        alert("Successfully Registered");
        return true;
    }
}
