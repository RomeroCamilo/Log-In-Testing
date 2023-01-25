//CHECKING OUR LOCAL STORAGE.
let loginInfo;

//retrieve local storage with key. convert the storage value from string to its original data type with 'JSON.parse()'
const savedStorage = JSON.parse(localStorage.getItem('user'));

//if an array is found in this program, that means there is already previous info to use, so we will use the previous info.
if(Array.isArray(savedStorage)){
   loginInfo = savedStorage;
}
//if local storage is empty, create a new array.
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


//function where we sign up the users.
function signup(){
    //input validation.
    if(document.getElementById('user').value ===""){
        alert("Username field is empty");
    }
    else if(document.getElementById('password').value === ""){
        alert("Password field is empty");
    }
    //if fields are filled in.
    else{   
        let doesNotExist = true;     
       
        //checking if username already exists in our array object of users.
        loginInfo.every(element => {
            if(element.user === document.getElementById('user').value){
                doesNotExist = false;
                //return false;
            }
        });
        
        //no user will be added since username already exists.
        if(doesNotExist === false){
            alert("Username already exists")
        }
        //adding user to local storage.
        else{

        }
    }
}



