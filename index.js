
let userDetails = [{"username": "chandrakiran", "password" : "Chandrakiran@"}, {"username": "venkatesulu", "password" : "Venkatesulu@"}, {"username": "santhoshi", "password" : "Santhoshi@"}]

let myForm = document.getElementById("myForm");
let userInputEle = document.getElementById("username");
let passwordInputEle = document.getElementById("password");

let userError = document.getElementById("usernameerror");
let passwordError = document.getElementById("passworderror");
let failureError = document.getElementById("failure")

let errorMsg = "*Required";

let getUsername = "";
let getPassword = "";

userInputEle.addEventListener("blur", function(event) {
    if(event.target.value === ""){
        userError.textContent = errorMsg;
    }else{
        userError.textContent = "";
    }
})

passwordInputEle.addEventListener("blur", function(event) {
    if(event.target.value === ""){
        passwordError.textContent = "*Required";
    }else{
        passwordError.textContent = "";
    }
})

userInputEle.addEventListener("change" , function(event) {
    //  console.log(event.target.value);
    getUsername = event.target.value;
})

passwordInputEle.addEventListener("change" , function(event) {
    //  console.log(event.target.value);
    getPassword = event.target.value;
})



myForm.addEventListener("submit", function(event){
    event.preventDefault();
    
    
    
    failureError.textContent = "";


    if(getUsername === "" & getPassword === ""){
        userError.textContent = errorMsg;
        passwordError.textContent = "*Required";
    }else if(getUsername === ""){
        userError.textContent = errorMsg;
    } else if(getPassword === ""){
        passwordError.textContent = "*Required";
    } else {
        let filterUserDetails = userDetails.filter(each => {
            return each.username === getUsername && each.password === getPassword
        })
        console.log(filterUserDetails.length)

        if (filterUserDetails.length === 1){
            failureError.textContent = "Login successful!"
            getPassword=""
            getUsername=""
            userInputEle.value = "";
            passwordInputEle.value = "";
            failureError.classList.add("success-msg")
            failureError.classList.remove("failure-msg")
            window.open("file:///D:/Huewine/Frontend%20Assignments/Assignment-2/index.html", "_blank");
            //window.open("D:\Huewine\Frontend Assignments\Assignment-2\index.html", "_blank");
            //window.location.href="D:\Huewine\Frontend Assignments\Assignment-2\index.html"
        }
        else{
            failureError.classList.add("failure-msg")
            failureError.classList.remove("success-msg")
            failureError.textContent = "Enter Correct Details"
        }

        
    }
})