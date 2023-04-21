//Connect DOM elements to interact with
const inputEl = document.getElementById('input-el');
const btnEl = document.getElementById('btn-el');
let ulEl = document.getElementById('ul-el');

let userLinks = [];

function pushLink() {
    userLinks.push(inputEl.value);

    //Display the link
    displayLink()
}

function displayLink() {
    let linkToDisplay = '';
    for (i=0 ; i<userLinks.length ; i++) {
        
        linkToDisplay += `<li><a href='${userLinks[i]}' target='_blank'>${userLinks[i]}</a></li>`

    }
    ulEl.innerHTML = linkToDisplay
    console.log(linkToDisplay);
}

btnEl.addEventListener('click', pushLink)