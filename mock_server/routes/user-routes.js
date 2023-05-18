const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const { User, userSchema} = require('../schema/user-schema');
const { TRUE } = require('node-sass');

router.post(
  'api/users/register',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
  ],
  async (req, res) => {
    console.log(req.body);
    console.log('route hit');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const email = req.body.email;
    const password = req.body.password;

    try {
      // Check if user already exists
      let user = await userSchema.User.findOne({ email });
      console.log(user);

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({ email, password });

      // Hash password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save user to database
      await user.save();

      // Create and sign JWT
      const payload = { user: { id: user.id } };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

router.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Create and sign JWT
    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get many Users
// will authenticate this a litte later to hide specific information.
// router.post('/api/users', async (req, res) => {
//   console.log('hit get all users route');
//   const lim = req.body.limit;
//   User.find().limit(lim).then((users)=> {
//     console.log(users);
//   })
// });

//Get one User
// will authenticate this a litte later to hide specific information.
router.post('/api/checkusers', async (req, res) => {
  console.log(req.body.payload);
  const email = req.body.payload;
  let user = await User.findOne({ email });
  console.log(user);

  if (user == null) {
    return res.status(200).json({ exists: false });
  } else {
    // if is auth else will vary what this sends depending on if the user is authenticated or not.
    res.status(200).json({exists : true});
  }
});

module.exports = router;
