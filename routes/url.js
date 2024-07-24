//Handling routes.All routes starting from /url will be handled here.

const express = require ("express");
const router = express.Router();

const {handleGenerateNewShortURL,
    handleGetAnalytics,
    RespondBack,
   
}= require('../controllers/url')

router.post('/',handleGenerateNewShortURL)  
router.get('/analytics/:shortId' ,handleGetAnalytics )
router.get('/:shortId',RespondBack)


module.exports = router;