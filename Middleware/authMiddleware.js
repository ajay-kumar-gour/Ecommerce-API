const jsonwebtoken = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");
  console.log(token);

  if (!token) {
    return res.status(401).send({ message: "Access Denied. Missing Token" });
  }

  jsonwebtoken.verify(token, SECRET, (error, decoded) => {
    if (error) {
      console.log(error);
      return res.status(403).send({ message: "Invalid Token" });
    } else {
      console.log("Decoded JWT Payload :", decoded);
    }

    next();
  });
};

module.exports = authenticateToken;
