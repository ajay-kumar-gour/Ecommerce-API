const bcrypt = require("bcrypt");

const jsonwebtoken = require("jsonwebtoken");

const User = require("../Model/User");
const SECRET = process.env.SECRET;
const userController = {
  register: async (req, res) => {
    try {
      const user = req.body;
      const { Firstname, Lastname, username, email, password } = req.body;
      console.log(user);
      const salt = 10;
      const hashedPWD = await bcrypt.hash(password, salt);
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(409).send({ message: "User already exists" });
      }

      const newUser = new User({
        Firstname,
        Lastname,
        username,
        email,
        password: hashedPWD,
      });
      const createdUser = await newUser.save();
      res
        .status(201)
        .send({ message: "User registered successfuly", createdUser });
    } catch (error) {
      console.log(error);
      res.send(500).status({ message: "Internal Server Error" });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).send({ message: "Invalid email or password" });
      }

      const pwdMatch = await bcrypt.compare(password, user.password);
      if (!pwdMatch) {
        return res.status(401).send({ message: "Invalid email or password" });
      }
      const token = jsonwebtoken.sign({ user }, SECRET);

      res.status(200).send({ message: "Login Successfully", token, user });
    } catch (erorr) {
      console.log(erorr);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      if (users.length < 0) {
        return res.status(404).send({ message: "No Users Found" });
      }
      res
        .status(200)
        .send({ message: "success", TotalUsers: users.length, users });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
};

module.exports = userController;
