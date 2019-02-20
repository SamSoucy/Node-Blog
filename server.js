const express = require("express");

const helmet = require("helmet");

const postsRouter = require("./posts/post-router");

const server = express();

server.use(express.json());

server.use("/api/posts", postsRouter)





module.exports = server;