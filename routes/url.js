const express = require('express');

const Url = require('../models/url');

const router = express.Router();

const { handleGenerateShortUrl,
        example,
        handleRedirectUrl,
        handleClickAnaytics} = require('../controller/url');

router.post('/url',handleGenerateShortUrl)
.get('/example',example)
.get('/:shortid',handleRedirectUrl)
.get('/analytics/:shortid',handleClickAnaytics)

module.exports = router;