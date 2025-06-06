const { Timestamp } = require('bson');
const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    shortId :{
        type:String,
        required : true,
        unique: true
    },
    redirectUrl :{
        type:String,
        required : true,
    },
    clickHistory :[
        {
            timeStamp :{
                type:Number
            }
        }
    ]
},{Timestamp :true}
)

const Url = mongoose.model("url",urlSchema);

module.exports = Url;