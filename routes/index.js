/**
 * 
 *  Filename: index.js
 * 
 *  Date: 17th November 2022
 * 
 *  Description: A collection file for both the
 *               content and API routes
 * 
 *  Version: v1.0 17/11/22
 * 
 */

const express = require("express");
const router = express.Router();


//on a 404 route
router.get("/", (req, res) => 
{
    res.render('pages/index');
})


module.exports = router;