const express = require('express');

const shortid = require('shortid');
const URL = require('../models/url');


async function handleGenerateShortUrl(req,res){
    const body = req.body;
    if(!body){
        res.staus(401).json({msg:"Url is missing"})
    }
    const shortID = shortid();
    const result = await URL.create({
        shortId :shortID,
        redirectUrl:body.url,
        clickHistory :[]
    })
    return res.status(200).json({shortid:shortID})
}

async function handleRedirectUrl(req,res){
    const shortId = req.params.shortid;
    const result = await URL.findOneAndUpdate(
        {shortId} ,
        {
        $push:{
            clickHistory:
            {
                timestamp :Date.now(),
            }
            }
        },
        {new:true}
)
    res.redirect(result.redirectUrl)
}

async function handleClickAnaytics(req,res){
    const shortId = req.params.shortid;
    const result = await URL.findOne({shortId});
    res.status(201).json({TotalClicks:result.clickHistory.length});
}

function example(req,res){
    res.json({msg:"example"})
}


module.exports={
    handleGenerateShortUrl,
    example,
    handleRedirectUrl,
    handleClickAnaytics
}