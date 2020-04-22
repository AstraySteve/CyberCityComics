//HTML Routes
module.exports = (app) =>{
    //home page
    app.get("/",(req,res)=>{
        res.render("index",{
            title: "Cyber City Comics",
        });
    })

    //Page based on issues
    app.get("/:id",(req,res)=>{
        if(isNaN(parseInt(req.params.id))){
            res.render("404",{
                title: `Cyber City Comics`
            });
        }
        else{
            res.render("index",{
                title: `Cyber City Comics`,
            });
        }
    })
}