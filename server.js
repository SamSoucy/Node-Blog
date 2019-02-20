const express = require("express");

const helmet = require("helmet");

const postsRouter = require("./posts/post-router");
const usersRouter = require("./users/user-router")

const server = express();

server.use(express.json());

server.use("/api/posts", postsRouter)
server.use("/api/users", usersRouter)





module.exports = server;