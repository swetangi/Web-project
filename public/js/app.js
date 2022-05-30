// const { response } = require("express");

console.log("Client side java script File is Created");
fetch('https://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data);
    })
})