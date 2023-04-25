//Connect DOM elements to interact with
const inputEl = document.getElementById('input-el');
const btnEl = document.getElementById('btn-el');
let ulEl = document.getElementById('ul-el');

let userLinks = [];

function getLocalStorage() {
    
    let linksFromLocalStorage = localStorage.getItem('userLinks') 
    linksFromLocalStorage = JSON.parse(linksFromLocalStorage)

    console.log(linksFromLocalStorage.length);

    let linkToDisplay = '';

    for (let i = 0; i < linksFromLocalStorage.length; i++) {
        //Display localStorage elements on DOM
        //assign list HTML element to variable
        linkToDisplay += `<li><a href='${linksFromLocalStorage[i]}' target='_blank'>${linksFromLocalStorage[i]}</a></li>`
    }
    //Push linksFromLocalStorage to usrLinks array
    userLinks = linksFromLocalStorage

    ulEl.innerHTML = linkToDisplay
    linksFromLocalStorage = JSON.stringify(linksFromLocalStorage)
    
    console.log(linksFromLocalStorage);
    console.log(localStorage.getItem('userLinks'));


}

window.onload = getLocalStorage;

function pushLink() {
    userLinks.push(inputEl.value);

    //Display the link
    displayLink()

    //input to empty
    inputEl.value = ''

    //LocalStorage

    //Save userLinks to localStorage
    localStorage.setItem('userLinks', JSON.stringify(userLinks))

    //Convert userLinks to array
    // userLinks = JSON.parse(userLinks)

    console.log(localStorage.getItem('userLinks'));
}

function displayLink() {
    let linkToDisplay = '';
    for (i=0 ; i<userLinks.length ; i++) {


        //assign list HTML element to variable
        linkToDisplay += `<li><a href='${userLinks[i]}' target='_blank'>${userLinks[i]}</a></li>`

    }
    ulEl.innerHTML = linkToDisplay
    console.log(linkToDisplay);
}

btnEl.addEventListener('click', pushLink)

//Add link when pressing "enter" key
document.addEventListener('keypress', function(e) {
    if(e.key === 'Enter' && inputEl.value !== ''){
        pushLink()
    }
})

