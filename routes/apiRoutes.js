//API Routes
//Imports
const axios = require('axios');

module.exports = (app) =>{
    /*API route for default comic data*/
    app.get("/getComic", async (req, res)=>{
        try{
            const response = await axios.get("http://xkcd.com/info.0.json");
            //console.log(response.data);
            res.json(response.data);
        }
        catch(error){
            console.error(error);
        }
    });

    /*API route for getting specific comic data*/
    app.get("/getComic/:id", async (req,res)=>{
        try{
            const response = await axios.get(`http://xkcd.com/${req.params.id}/info.0.json`);
            //console.log(response.data);
            res.json(response.data);
        }
        catch(error){
            console.error(error);
        }
    });
}