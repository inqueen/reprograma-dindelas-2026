const dotenv = require("dotenv");

// UTILIZANDO ENV
dotenv.config;
let secret = process.env.secret;

module.exports = {
  secret: secret,
  expiresIn: "1d"
};
