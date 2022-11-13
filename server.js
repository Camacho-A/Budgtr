require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const budgets = require("./models/budget")
const budget = require("./models/budget")

const PORT = process.env.PORT || 3000 


const app = express()

app.use(express.urlencoded({extended: true}))
app.use(morgan("tiny"))
app.use(methodOverride("_method"))
app.use("/static", express.static("public"))
app.use('/public', express.static('public'));


//  Index Routes
app.get("/budget", (req, res) => {
    res.render("index.ejs", {
        allBudgets: budget
    })
       
})

// New Route
app.get("/budget/new", (req, res) => {
    res.render("new.ejs")
})

// //  Create Route
// app.post("/budget", (req, res) => {

// })

// Show Route
app.get("/budget/:id", (req, res) => {
    res.render("show.ejs", {
        budgets: budget[req.params.id]
        
        
    })

})


app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})