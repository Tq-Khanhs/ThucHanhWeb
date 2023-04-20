const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", function(){
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", function(){
  container.classList.remove("right-panel-active");
});


