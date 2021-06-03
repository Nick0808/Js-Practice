// DOM(Document Object Module)
title.innerHTML = "No more excuses!";
console.error("100% error")

const base_color = 'yellow';
const change_color = 'red';

function handleclick(){
    const currentColor = title.style.color;
    if(currentColor === base_color) {
        title.style.color = change_color;
    } else {
        title.style.color = base_color;
    }
}

function init() {
    title.style.color = base_color;
    title.addEventListener("click", handleclick);
}

init();

function handleOffline() {
    alert("Bye Bye! See you next time");
}

function handleOnline(){
    alert("Welcome to my page!");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
