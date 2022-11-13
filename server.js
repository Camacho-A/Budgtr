require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const budget = require("./models/budget")

const PORT = process.env.PORT || 3000 


const app = express()


//  Index Routes
app.get("/budget", (req, res) => {
    res.render("index.ejs",
        {
            allBudget: budget
        })
})

// // Show Route
// app.get("/budget/:index", (req, res) => {
//     res.render("show.ejs")

// })

// // New Route
// app.get("/budget/new", (req, res) => {
//     res.render("new.ejs")
// })

// //  Create Route
// app.post("/budget", (req, res) => {

// })


app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})