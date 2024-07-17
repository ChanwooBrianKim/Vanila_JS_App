// Define Login & Button
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// To reduce risk of wrong type of repeated word
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// Function for login button clicked
function onLoginSubmit(event) {
  event.preventDefault(); // Prevent from refresh after clicking submit button
  loginForm.classList.add(HIDDEN_CLASSNAME); // add 'hidden' to login-form not to show login form to the user
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); // Store key & value to the local storage
  paintGreetings(username); // Use paintGreetings to show Hello + 'Username'
}

// Function for greetings after login successful
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; // Important to use `` instead of '' or ""
  greeting.classList.remove(HIDDEN_CLASSNAME); // Remove "hidden" class name to show greetings
}

loginForm.addEventListener("submit", onLoginSubmit); // See if a user click login button
const savedUsername = localStorage.getItem(USERNAME_KEY); // Save user name in the local storage

// Check username is stored in the local storage
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
