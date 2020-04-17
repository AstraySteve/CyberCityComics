//HTML Routes
module.exports = (app) =>{
    //home page
    app.get("/",(req,res)=>{
        res.render("index",{
            title: "Cyber City Comics",
        });
    })
}