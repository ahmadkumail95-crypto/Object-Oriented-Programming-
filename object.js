/*var  userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    //ES6 function style
       login(){
        console.log(this.email, 'has logged in');
         return this;
    },
    logout(){
        console.log(this.email, 'has logged out');
         return this;
    }
   
};
*/


/*
class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score  = 0;

    }
    login(){console.log(this.email, 'just logged in');
         return this;
    }
    

    logout(){console.log(this.email, 'just logged out');
          return this;
    }
   
     updateScore(){
        this.score ++;
        console.log(this.email, 'score is now', this.score);
        return this;

    }
    
}
class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email
        });
    }
}
*/




/*var userOne = new User('kk@gmail.com', 'john');
var userTwo = new User ('bauiq@hotmai.com', 'snow')
/*
userOne.login();
userOne.logout();*/

//  chaining to avoid repetation of user.one.updateScore
// OR userOne.login().logout()
// instead of returning undefined (the default), 
// the method returns the current instance of the object


//Chaining 
 // userOne.login().updateScore().updateScore().logout();


/*var admin = new Admin('shaun@ninjas.com', 'Shaun');

var users = [userOne, userTwo, admin];

 admin.deleteUser(userTwo);
//  userTwo.deleteUser(userOne); // won't work

console.log(users);


function User(email , name) {

    this.email = email;
    this.name = name;
    this.online = false;
    // this.login = function(){
        //console.log(this.email,'has logged in');
    } 

    User.prototype.login = function(){
        this.online = true;
        console.log(this.email,'has logged in');
        
    }
    
    User.prototype.logout = function(){
        this.online = false;
        console.log(this.email,'has logged out');
        
    }

    function Admin (...args){
        User.apply(this, args);
        this.role = 'Super admin';

    }
    Admin.prototype = Object.create(User.prototype);
    Admin.prototype.deleteUser = function(u){
        users =users.filter(user=>{
            return user.email != u.email;
        });


    }

    


var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin ( 'bac@jj.com','zakir') ;
var users = [ userOne,userTwo, admin];


console.log(admin);

/*console.log(userOne);
userTwo.login();*/


// PRACTICE SESSION USING OOPS AND DOM 






// Base User class
class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }

  login() {
    console.log(this.email, "just logged in");
    return this;
  }

  logout() {
    console.log(this.email, "just logged out");
    return this;
  }

  updateScore() {
    this.score++;
    console.log(this.email, "score is now", this.score);
    return this;
  }
}

// Admin class extends User
class Admin extends User {
  constructor(email, name) {
    super(email, name);
    this.role = "Super Admin";
  }

  deleteUser(users, user) {
    return users.filter(u => u.email !== user.email);
  }
}

// Store all users
let users = [];

// DOM elements
const form = document.querySelector("#user-form");
const userList = document.querySelector("#user-list");

// Render users in DOM
function renderUsers() {
  userList.innerHTML = "";

  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.name} (${user.email}) - Score: ${user.score}`;
    if (user instanceof Admin) li.classList.add("admin");

    // Add updateScore button
    const scoreBtn = document.createElement("button");
    scoreBtn.textContent = "Update Score";
    scoreBtn.onclick = () => {
      user.updateScore();
      renderUsers();
    };

    // Add delete button if Admin
    if (user instanceof Admin) {
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete User";
      deleteBtn.onclick = () => {
        users = user.deleteUser(users, users[0]); // delete first user as demo
        renderUsers();
      };
      li.appendChild(deleteBtn);
    }

    li.appendChild(scoreBtn);
    userList.appendChild(li);
  });
}

// Handle form submission
form.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const role = document.querySelector("#role").value;

  let newUser;
  if (role === "admin") {
    newUser = new Admin(email, name);
  } else {
    newUser = new User(email, name);
  }

  users.push(newUser);
  renderUsers();

  form.reset();
});











 