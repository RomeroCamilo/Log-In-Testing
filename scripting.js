//CHECKING OUR LOCAL STORAGE.
let loginInfo;

//retrieve local storage with key. convert the storage value from string to its original data type with 'JSON.parse()'
const savedStorage = JSON.parse(localStorage.getItem('user'));

//if an array is found in this program, that means there is already previous info to use, so we will use the previous info.
if(Array.isArray(savedStorage)){
   loginInfo = savedStorage;
}
//if local storage is empty, create a new array. test
else{
    //making an object of users.
     loginInfo = [
    {
        user: 'John Doe', password: "2021-10-04"
    }
  ]
}

//using our local storage to store the values of our object array after adding and deleting data.
//local storage must have a string key and value, so make sure to stringify any value before placing into storage.
//whenever we modify our array, we call this funciton
function saveUsers(){
    //function that will store our current array in local storage. the array is not a string, so i converted it into a string.
    localStorage.setItem('user', JSON.stringify(loginInfo));
  }

//function to add user and password to local storage.
function addUser(user,password){
    //adding new user name in array.
    loginInfo.push({user:user,password:password});
    //updating local storage
    saveUsers();
  }

//validating if user already exists or not
function checkExistence(user){

    let doesNotExist = true;

    //checking if current user input for sign up already exists.
    loginInfo.forEach(function (value){
        if(value.user === user){
            doesNotExist = false;
        }
    })

    return doesNotExist;
}

//function where we sign up the users.
function signup(){
    //input validation.
    if(document.getElementById('user').value === ""){
        alert("Username field is empty");
    }
    else if(document.getElementById('password').value === ""){
        alert("Password field is empty");
    }
    //if fields are filled in.
    else{ 
        //will return true or false.
        let doesNotExist = checkExistence(document.getElementById('user').value);

        console.log(doesNotExist);
        
        //no user will be added since username already exists.
        if(doesNotExist === false){
            alert("Username already exists...")
        }
        //adding user to local storage if username does not already exist.
        else{
            let user = document.getElementById('user').value;
            let pass = document.getElementById('password').value;
            addUser(user,pass);
            alert("Sign up complete.");
        }
    }  
}

//function that will be used to check whether a login is valid or not.
function validateLogin(user,pass){

    let valid = false;

    loginInfo.forEach(function(info){
        //if we found a matching user and pass in the login info data (loginInfo object array) stored.
        if(info.user === user && info.password === pass){
            return valid = true;
        }
    })

    return valid;
}

//function to log in.
function login(){
    //input validation.
    if(document.getElementById('user').value === ""){
        alert("Username field is empty");
    }
    else if(document.getElementById('password').value === ""){
        alert("Password field is empty");
    }
    //if fields are filled in.
    else{

        let user = document.getElementById('user').value;
        let pass = document.getElementById('password').value;
        
        //checking whether the login creditionals are a valid pair.
        let validLogin = validateLogin(user,pass);

        if(validLogin === false){
            alert("Invalid creditionals. Try again")
        }
        else{
            alert("Succesfully logged in!")
        }
    }
}




