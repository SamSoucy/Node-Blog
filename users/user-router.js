const express = require("express");

const Users = require("./userDb.js");

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const users = await Users.get(req.query);
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: 'The users information could not be retrieved.',
      });
    }
});
  
router.get('/:id', async (req, res) => {
    try {
      const user = await Users.getById(req.params.id);
  
      if (user.length !== 0) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "The user with the specified ID does not exist."  });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "The user information could not be retrieved.",
      });
    }
});
  
router.post('/', async (req, res) => {
    try {
      const user = await Users.insert(req.body);
      if (user) {
        res.status(201).json(user);
      } else {
        res.status(400).json({ errorMessage: "Please name for the user." });
      }
      
    }catch (error) {
      console.log(error);
      res.status(500).json({
        error: "There was an error while saving the user to the database",
      });
    }
});
  
router.delete('/:id', async (req, res) => {
    try {
      const user = await Users.remove(req.params.id);
      if (user > 0) {
        res.status(200).json({ message: 'This user has been deleted' });
      } else {
        res.status(404).json({ message: "The user with the specified ID does not exist."  });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "The user could not be removed" ,
      });
    }
  });
  
  
  module.exports = router;