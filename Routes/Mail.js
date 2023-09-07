
const express = require("express");
const serv = require("../Services/NodemailService");

// Service Authentication

const router = express.Router();

router.post('/Sendemail', serv.sendmail);
router.post('/SendemailPassword', serv.sendmailpass);


module.exports = router;