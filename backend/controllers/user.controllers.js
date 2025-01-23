import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModels from '../models/user.models.js';

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = await userModels.create({
      name,
      email,
      password: hash,
    });

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET
    );

    res.cookie('token', token);
    res.status(201).json({ message: 'User created successfully', user, token });
  } catch (error) {
    console.log(error.message);
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await userModels.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET
    );

    res.cookie('token', token);
    res
      .status(200)
      .json({ message: 'User logged in successfully', user, token });
  } catch (error) {
    console.log(error.message);
  }
};

const userLogout = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'User logged out successfully' });
};

const getUserProfile = async (req, res) => {
  const user = await userModels.findOne({ email: req.user.email });
  res.send({ user });
};

export { userRegister, userLogin, userLogout, getUserProfile };
