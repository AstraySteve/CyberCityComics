console.log("Hello World");

//Functions

const fetchComic = () =>{
    //Function that retrieves the comic data api for display
    let getAPI = "/getComic";
    fetch(getAPI).then(response=>{
        console.log(response);
        return response.json();
    }).then(data=>{
        console.log(data);
    });
}

fetchComic();