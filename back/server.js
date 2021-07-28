// IMPORTS 
const express = require("express")
const http = require("http")
const socketio = require("socket.io")
const mongoose = require("mongoose")
const User = require("./userSchema")
const cors = require("cors")


// create server
const app = express()
const server = http.createServer(app)
const io = socketio(server)

let messages = []


//middlewares
app.use(cors())
app.use(express.json());



//home routes
app.post("/signup" , async (req, res) => {
    const {username , password} = req.body

    if (!await User.findOne({username})){
        const user = new User({
            username,
            password
        })
        user.save()
        return
    }
    console.log("error")

})

app.post("/login" , async (req, res) => {
    const {username , password} = req.body;
    const user = await User.findOne({username, password})
    if (!user){
        console.log("error")
        res.send(false)
        return
    }
    console.log(user)
    res.send(user)
})
// socket.io functions
io.on("connection" , socket => {
    console.log("new connection")
    socket.on("message" , miew => {
        messages.push(miew)
        console.log(messages)
        socket.emit("response" , messages)
    })
    socket.on("disconnect" , res => {
        console.log("user disconnected")
    })
})



//  PORT
const PORT = 5000;

//  server listen

mongoose.connect("mongodb+srv://DanShohat:muck1234@cluster0.vypnr.mongodb.net/users?retryWrites=true&w=majority" , { useUnifiedTopology: true, useNewUrlParser: true })
    .then((err) => {
        if (!err){
            console.log("error")
            return
        }
        server.listen(PORT , () => console.log("The server is running on port " + PORT))
    })

