const express = require("express");

const helmet = require("helmet");

const postsRouter = require("./posts/post-router");
const usersRouter = require("./users/user-router")

const server = express();


server.use(express.json());
server.use(upperCase);
server.use(helmet());

server.use("/api/posts", postsRouter)
server.use("/api/users", usersRouter)

server.get("/", (req, res) => {
    res.send("sam's project go to /api/users || api/posts")
})


function upperCase(req, res, next) {
    if (!req.body.name) {
        next();
    } else {
        req.body.name = req.body.name.toUpperCase();
        next();
    }
}

module.exports = server;