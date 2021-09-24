const jwt = require("jsonwebtoken");
const { jwtKey } = require("../middlewares/key");
require('dotenv').config()

const generateToken = (data) => {
    const access_token = jwt.sign(
      { email: data.email, id: data.id, isAdmin: data.isAdmin },
      process.env.jwtKey

    );
    return access_token;
  };
  
  const verifyToken = (token) => {
    const verified = jwt.verify(token, secret);
    return verified;
  };
  
  module.exports = { generateToken, verifyToken };