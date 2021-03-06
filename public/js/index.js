/*
    Steven Tran 2020
    Cyber City Comics
*/
//Javascript
//Global Variables
let currentURL = window.location.href;
let linkSplit = currentURL.split("/");
let currentLocation = linkSplit[linkSplit.length - 1];
let getAPI = `/getComic/${currentLocation}`
let latestComic = 0;

//Functions
const insertHTMLElement = (data) => {
    //Function to create the dynamic html element to insert
    
    const displayNode = document.getElementById("comic-display");

    //Empties the "comic-page" DOM element
    /*while (displayNode.firstChild){
        displayNode.removeChild(displayNode.firstChild);
    }*/
    
    //Building the <header> tag and appending it to the "comic-display" DOM element
    let comicHeader = document.createElement("header");
    comicHeader.className = "comic-header";

    //Getting the Title and Issue Number
    let comicLable = document.createElement("h2");
    comicLable.innerHTML = `Issue # ${data.num} : ${data.title}`;
    comicHeader.appendChild(comicLable);
    //Getting the Date
    let comicDate = document.createElement("p");
    comicDate.innerHTML = `Date Created: ${data.year}-${data.month}-${data.day}`
    comicHeader.appendChild(comicDate);
    displayNode.appendChild(comicHeader);

    //Building the <img> tag and appending it to the "comic-page" DOM element
    let comicImg = document.createElement("img");
    comicImg.src = data.img;
    comicImg.alt = data.alt;
    displayNode.appendChild(comicImg);

    //Getting transcript and placing it in <article>
    parseTranscript(data.transcript, displayNode);
    /*if(data.transcript !==""){
        let comicArticle = document.createElement("article");
        let transcript = data.transcript;
        if (transcript.length > 0){
            let comicTranscript = document.createElement("p");
            comicTranscript.innerHTML = transcript;
            comicArticle.appendChild(comicTranscript);
        }
        displayNode.appendChild(comicArticle);
    }*/
}

const parseTranscript = (transcript, displayID) => {
    //Funtion that parses JSON data (transcript) and insert <article> into HTML element ID (displayID)
    let comicArticle = document.createElement("article");
    if (transcript.length > 0){
        let transcriptArray = transcript.split("\n");
        console.log(transcriptArray);
        for (i = 0; i < transcriptArray.length; i++){
            //console.log(`${i} : ${transcriptArray[i]}`);
            let comicTranscript = document.createElement("p");
            comicTranscript.innerHTML = transcriptArray[i];
            comicArticle.appendChild(comicTranscript);
        }
    }
    displayID.appendChild(comicArticle);

}

const getLatestComic = () => {
    //Function that retrieves the latest comic
    fetch("/getComic").then(response => {
        return response.json();
    }).then(data => {
        latestComic = data.num;
    }).catch(err => {
        console.error(err);
    });
}

const fetchComic = () => {
    //Function that retrieves the comic api json for display
    /*let getAPI = "/getComic";
    if(currentLocation !== ""){
        //console.log(currentLocation);
        getAPI = `/getComic/${currentLocation}`;
    }*/
    fetch(getAPI).then(response => {
        //console.log(response);
        return response.json();
    }).then(data => {
        //console.log(data);
        currentLocation = data.num;
        insertHTMLElement(data);
    }).catch(err => {
        console.error(err);
    });
}

const buildDefaultLink = () => {
    //Function that builds the default link
    let defaultLink = "";
    for (i=0;i<(linkSplit.length - 1);i++){
        defaultLink = defaultLink + linkSplit[i] + "/";
    }
    return defaultLink;
}

const prevComic = () => {
    //Function to retrieve previous comic
    let prevIssue = parseInt(currentLocation) - 1;

    if(prevIssue < 1){
        //Already at first comic
        prevIssue = 1;
    }

    //Redirect to new page
    location.href = buildDefaultLink() + prevIssue;
}

const nextComic = () => {
    //Function to retrieve the next comic
    let nextIssue = parseInt(currentLocation) + 1;
    if (nextIssue > latestComic){
        nextIssue = latestComic;
    }
    //Redirect to new page
    location.href = buildDefaultLink() + nextIssue;
}

const goToHome = () => {
    //Function that redirect to home page
    location.href = buildDefaultLink();
}

const jumpPrompt = () => {
    //Function that prompts the user which comic issue to jump to
    let comicNumber = prompt(`Jump to comic issue:(1 - ${latestComic})`);
    //console.log(comicNumber);
    if(comicNumber <= latestComic && comicNumber >= 1){
        location.href = buildDefaultLink() + comicNumber;
    }
    else if(comicNumber > latestComic){
        location.href = buildDefaultLink() + latestComic;
    }
    else{
        location.href = buildDefaultLink() + 1;
    }
}

const getRandomComic = () =>{
    //Function that retrieves a random comic
    let randomComic = Math.floor(Math.random()*(latestComic - 1)) + 1;
    location.href = buildDefaultLink() + randomComic;
}

getLatestComic();
fetchComic();