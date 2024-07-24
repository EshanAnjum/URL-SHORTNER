const express = require ("express")
const app = express()
const {connectToMongoDB} = require("./connect")
const urlRoute = require('./routes/url')  //our router module
const StaticRoute = require('./routes/StaticRouter');
const URL = require("./models/url")  //DB model
const path = require('path');


const PORT = 8001;


//Connecting to database.
connectToMongoDB('mongodb://localhost:27017/short-url')
.then(() => console.log("Mongodb connected"))

// app.set("view engine" , "ejs");
// app.set('views',path.resolve("./views"))

app.use(express.json());



//app.get("/test",async(req,res)=>{
    // const allUrls = await URL.find({});
    // return res.end(`
    // <html>
    // <head></head>
    // <body>
    //     <ol>
    //     ${allUrls.map(url=> `<li>${url.shortId} - ${url.redirectURL} -${url.visitHistory.length}</li>`).join("")}
    //     </body>
    //     </html>
    // `)

    // return res.render('home',{ urls:allUrls})
//})





app.use("/url",urlRoute); //Specifies that all routes starting with /url will be referring to url.js in router.
app.listen(PORT,()=> console.log(`Server listening at port ${PORT}`))
