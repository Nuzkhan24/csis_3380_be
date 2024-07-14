const User = require('../models/user_model');

async function signin(req, res) {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    if (user) {
      console.log(user);
      res.json(user);
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function signup(req, res) {
  try {
    console.log(req.body);
    const query = User.where({ email: req.body.email });
    const existingUser = await query.findOne();
    console.log(existingUser);

    if (existingUser) {
      res.status(409).json({ error: 'Email already exists' }); // HTTP status code 409 for conflict
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.firstName,
        role: req.body.role,
        address: req.body.address,
        phNumber: req.body.phNumber,
        expertise: req.body.expertise,
        businessAddress: req.body.businessAddress,
        hourlyRate: req.body.hourlyRate,
        profilePicture: req.body.profilePicture,
        certificate: req.body.certificate,
      });
      const savedUser = await newUser.save();
      console.log(savedUser);
      res.json(savedUser);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

// Get all user
async function getUsersByRole(req, res) {
  try {
    console.log(req.params.role);

    const users = await User.where({ role: req.params.role });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
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
  signin,
  signup,
  getUsersByRole,
  putUser,
  getUser,
};
