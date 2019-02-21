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

router.get('/:id', async (req, res) => {
  try {
    const post = await Posts.getById(req.params.id);

    if (post.length !== 0) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "The post with the specified ID does not exist."  });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "The post information could not be retrieved.",
    });
  }
});

router.post('/', async (req, res) => {
  if (!req.body.text || !req.body.user_id) {
    res.status(400).json({ errorMessage: "Please provide text for the post." });
  } else {
    try {
      const post = await Posts.insert(req.body);
      res.status(201).json(post);
    
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "There was an error while saving the post to the database",
      });
    }
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const post = await Posts.remove(req.params.id);
    if (post > 0) {
      res.status(200).json({ message: 'This post has been deleted' });
    } else {
      res.status(404).json({ message: "The post with the specified ID does not exist."  });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "The post could not be removed" ,
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const post = await Posts.update(req.params.id, req.body);
    if (post) {
      res.status(200).json({message: 'This post has been Updated'});
    } else if(post) {
      res.status(400).json({ errorMessage: "Please provide title and contents for the post." });
    } else {
      res.status(404).json({ message: "The post with the specified ID does not exist." });
    }
} catch (error) {
  console.log(error);
    res.status(500).json({
       error: "The post information could not be modified."
    });
  };
});

module.exports = router;