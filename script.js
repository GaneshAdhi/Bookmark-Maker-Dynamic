// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

//form container

let bookmarkFormEl = document.getElementById("bookmarkForm");

// Inputs Element 
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");

// Error Message Inputs
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");

// bookmarksList Element 
let bookmarksListEl = document.getElementById("bookmarksList");

// submit Button Element 
let submitBtnEl = document.getElementById("submitBtn");

//form Data 
let data = {
    name: "",
    url: ""
}


// SITE NAME Function
function nameError(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Requried*"
    } else {
        siteNameErrMsgEl.textContent = ""
    }
    data.name = event.target.value;
}


siteNameInputEl.addEventListener("change", nameError);

//SITE URL Funtion 
function urlError(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Requried*"
    } else {
        siteUrlErrMsgEl.textContent = ""
    }
    data.url = event.target.value;
}

siteUrlInputEl.addEventListener("change", urlError);

// form Validation funtion
let funtionFormCorrection = function(data) {
    let {
        name,
        url
    } = data;
    if (name === "") {
        siteNameErrMsgEl.textContent = "Requried*";
    }
    if (url === "") {
        siteUrlErrMsgEl.textContent = "Requried*";
    }

}

function createElement(data) {
    let listEl = document.createElement("li");
    bookmarksListEl.appendChild(listEl);
    let nameEl = document.createElement("p");
    nameEl.textContent = data.name;
    nameEl.classList.add("para-response");
    listEl.appendChild(nameEl);

    let urlEl = document.createElement("a");
    urlEl.textContent = data.url;
    urlEl.target = "-blank";
    urlEl.href = data.url;
    listEl.appendChild(urlEl);
}
//submit funtion
bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    bookmarksListEl.classList.remove("d-none");
    funtionFormCorrection(data);
    createElement(data);

});
