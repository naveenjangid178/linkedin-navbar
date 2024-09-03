const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())

app.get("/notifications", (req, res)=>{
    return res.json({
        "network": Math.floor(Math.random()*50),
        "jobs": Math.floor(Math.random()*10),
        "messages": Math.floor(Math.random()*20),
        "notifications": Math.floor(Math.random()*30),
    })
})

app.listen(3000)