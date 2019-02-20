const express = require("express");



const Posts = require("./postDb.js");

const router = express.Router();

//**********to retrieve a list of posts****************/

router.get('/', async (req, res) => {
    try {
      const posts = await Posts.get(req.query);
      res.status(200).json(posts);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: 'The posts information could not be retrieved.',
      });
    }
});


module.exports = router;