//HTML Routes
module.exports = (app) =>{
    let versionNum = 1.002;
    //home page
    app.get("/",(req,res)=>{
        res.render("index",{
            title: "Cyber City Comics",
            version: versionNum
        });
    })

    //Page based on issues
    app.get("/:id",(req,res)=>{
        if(isNaN(parseInt(req.params.id))){
            res.render("404",{
                title: "Cyber City Comics",
                version: versionNum
            });
        }
        else{
            res.render("index",{
                title: "Cyber City Comics",
                version: versionNum
            });
        }
    })
}