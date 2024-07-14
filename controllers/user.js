const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user_model');

async function signIn(req, res) {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      console.log(user);

      // Generate a JWT token
      const access_token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ ...user, access_token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function signUp(req, res) {
  try {
    console.log(req.body);
    const query = User.where({ email: req.body.email });
    const existingUser = await query.findOne();
    console.log(existingUser);

    if (existingUser) {
      res.status(409).json({ error: 'Email already exists' }); // HTTP status code 409 for conflict
    } else {
       // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

      const newUser = new User({
        email: req.body.email,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.firstName,
      });
      const savedUser = await newUser.save();
      console.log(savedUser);

      // Generate a JWT token
      const access_token = jwt.sign({ newUser }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.json({ ...savedUser, access_token });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function forgetPassword(req, res) {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (user) {
      console.log(user);
      // SEND an email with new generated password here
      // update password hash in db here      
      res.json({  });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Update a user by ID
async function putUser(req, res) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get a user by ID
async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'user not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  signIn,
  signUp,
  forgetPassword,
  putUser,
  getUser,
};
