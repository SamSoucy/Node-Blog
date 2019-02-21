const express = require("express");

const helmet = require("helmet");

const postsRouter = require("./posts/post-router");
const usersRouter = require("./users/user-router")

const server = express();
// server.use(restricted);

server.use(express.json());
// server.use('/api/users', only('sam'))
server.use(helmet());

server.use("/api/posts", postsRouter)
server.use("/api/users", usersRouter)

// function only(name) {
//     return function (req, res, next) {
//         const myName = req.header.name || ""
//         if (myName.toUpperCase() === name.toUpperCase()) {
//             next();
//         } else {
//             res.status(403).json("can not change name")
//         }
//     }
// }





module.exports = server;