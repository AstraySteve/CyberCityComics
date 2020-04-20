/*
    Steven Tran 2020
    Cyber City Comics
*/
//Javascript

//Functions
const insertHTMLElement = (data) =>{
    //Function to create the dynamic html element to insert

    //Empties the "comic-page" DOM element
    const displayNode = document.getElementById("comic-display");
    while (displayNode.firstChild){
        displayNode.removeChild(displayNode.firstChild);
    }
    
    //Building the <article> tag and appending it to the "comic-display" DOM element
    let comicArticle = document.createElement("article")

    //Getting the Title and Issue Number
    let comicLable = document.createElement("h2")
    comicLable.innerHTML = `Issue # - ${data.num} : ${data.title}`;
    comicArticle.appendChild(comicLable);
    //Getting the Date
    let comicDate = document.createElement("p");
    comicDate.innerHTML = `Date Created: ${data.year}-${data.month}-${data.day}`
    comicArticle.appendChild(comicDate);
    //Getting transcript
    let transcript = data.transcript;
    if (transcript.length > 0){
        let comicTranscript = document.createElement("p");
        comicTranscript.innerHTML = transcript;
        comicArticle.appendChild(comicTranscript);
    }
    displayNode.appendChild(comicArticle);

    //Building the <img> tag and appending it to the "comic-page" DOM element
    let comicImg = document.createElement("img");
    comicImg.src = data.img;
    comicImg.alt = data.alt;
    displayNode.appendChild(comicImg);
}

const fetchComic = () =>{
    //Function that retrieves the comic api json for display
    let getAPI = "/getComic";
    fetch(getAPI).then(response => {
        //console.log(response);
        return response.json();
    }).then(data => {
        console.log(data);
        insertHTMLElement(data);
    }).catch(err => {
        console.error(err);
    });
}

fetchComic();