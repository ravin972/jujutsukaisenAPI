const express = require("express");
const { default: mongoose } = require("mongoose");

const jujutsuKaisenSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    gender:{
        type: String
    },
    characterType:{
        type: String
    }
    ,dob:{
        type: Date,
        trim: true
    },
    powers:{
        type: String,
    }
})

// creating a new collection.
const JujutsuKaisen = new mongoose.model("JujutsuKai", jujutsuKaisenSchema);
module.exports = JujutsuKaisen;