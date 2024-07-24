
//Functions to be executed on specific routes.

const shortId = require ("shortid");
const URL = require('../models/url');


//This function generates shortId for a url , and saves it in our database.
async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error:"url is required"})


    console.log("inside");
    const shortID =shortId();
    await URL.create({
        shortId : shortID,
        redirectURL : body.url,
        visitedHistory:[],
    });

    return res.json({id:shortID})
}


//This function responds with analytics for a specific url.
async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    console.log("visit history ", result);
    return res.json({totalClicks: result.visitHistory.length, analytics: result.visitHistory 
    })
}


//This function responds back with the original website corresponding to the short url.
async function RespondBack(req,res){
    const shortId = req.params.shortId;
    console.log("hi");

    const entry =  await URL.findOneAndUpdate({
         shortId
     } , { $push:  {
         visitHistory:{
             timestamp: Date.now()
         }
     }})
 
     res.redirect(entry?.redirectURL);
}


module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
    RespondBack,
}