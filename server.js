const express = require("express")
const path = require("path")
const app = express();
const server = require("http").createServer(app)

app.use(express.static(path.join(__dirname + "/src"))) ;
const PORT = process.env.PORT || 8080 ;


app.listen(PORT, function(){
    console.log(`지금 연결된 포트는 ${PORT}번 입니다.`)
})