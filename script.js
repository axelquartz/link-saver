//Connect DOM elements to interact with
const inputEl = document.getElementById('input-el');
const btnEl = document.getElementById('btn-el');
const deleteBtnEl = document.getElementById('delete-btn-el');
let ulEl = document.getElementById('ul-el');

let userLinks = [];

function getLocalStorage(links) {
    
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
    links = linksFromLocalStorage
    ulEl.innerHTML = linkToDisplay
    linksFromLocalStorage = JSON.stringify(linksFromLocalStorage)
    console.log(linksFromLocalStorage);
    console.log(localStorage.getItem('userLinks'));
}

window.onload = function (){
    getLocalStorage(userLinks);
}

function pushLink(links) {
        links.push(inputEl.value);
        //Display the link
        displayLink(userLinks)
        //input to empty
        inputEl.value = ''
        //LocalStorage
        //Save userLinks to localStorage
        localStorage.setItem('userLinks', JSON.stringify(links))
        //Convert userLinks to array
        // userLinks = JSON.parse(userLinks)
        console.log(localStorage.getItem('userLinks'));
    }

function displayLink(links) {
    let linkToDisplay = '';
    for (i=0 ; i<links.length ; i++) {
        //assign list HTML element to variable
        linkToDisplay += `<li><a href='${links[i]}' target='_blank'>${links[i]}</a></li>`
    }
    ulEl.innerHTML = linkToDisplay
    console.log(linkToDisplay);
}

function deleteAll() {
    localStorage.clear()
    ulEl.innerHTML = ''
    userLinks = []
}

btnEl.addEventListener('click', function(){
    pushLink(userLinks)
})

//Add link when pressing "enter" key
document.addEventListener('keypress', function(e) {
    if(e.key === 'Enter' && inputEl.value !== ''){
        pushLink(userLinks)
    }
})
deleteBtnEl.addEventListener('dblclick', function() {
    deleteAll()
})

