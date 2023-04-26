const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
const { data } = require('./data')

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const { connection } = require('./connector')

app.get("/totalRecovered", (req, res) => {
    let sum = 0
    for(let i = 0 ; i < data.length ;i++){
        if(!data[i].recovered){continue}
        sum += data[i].recovered
    }
    res.json({data: {_id: "total", recovered:sum}})
})
app.get("/totalActive", (req, res) => {
    let sum = 0
    for(let i = 0 ; i < data.length ;i++){
        if(!data[i].infected){continue}
        sum += data[i].infected
    }
    res.json({data: {_id: "total", Active:sum}})
})
app.get("/totalDeath", (req, res) => {
    let sum = 0
    for(let i = 0 ; i < data.length ;i++){
        if(!data[i].death){continue}
        sum += data[i].death
    }
    res.json({data: {_id: "total",Death:sum}})
})
app.get("/hotspotStates",(req,res) =>{
    let arr = []
    for(let i = 0 ; i < data.length ;i++){
        let infc = data[i].infected;
        let rec = data[i].recovered;
        if(!infc || !rec){continue}
        if(((infc-rec)/infc) <= 0.1 ){continue}
        let detail = {
            state : data[i].state,
            rate : (infc-rec)/infc
        }
        arr.push(detail)
    }
    res.json({data: arr})
})
app.get("/healthyStates",(req,res)=>{
    let arr = []
    for(let i = 0 ; i < data.length ;i++){
        let infc = data[i].infected;
        let death = data[i].death;
        if(!infc || !death){continue}
        if((death/infc) >= 0.005 ){continue}
        let detail = {
            state : data[i].state,
            morality :  parseFloat((death/infc).toFixed(5))
        }
        arr.push(detail)
    }
    res.json({data: arr})
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;