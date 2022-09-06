const loginForm = document.querySelector(".loginForm")
const loginInput = document.querySelector(".loginForm input");
const h1 = document.querySelector(".greeting");

const hiddenClass = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(hiddenClass);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    h1.innerHTML = `안녕하세요 ${username} 님`;
    h1.classList.remove(hiddenClass);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if (savedUsername === null) {
    loginForm.classList.remove(hiddenClass);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    h1.classList.remove(hiddenClass);
    h1.innerText = `안녕하세요 ${savedUsername} 님`;
}