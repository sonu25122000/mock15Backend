const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "sonu", (err, decoded) => {
      if (decoded) {
        req.body.userID = decoded.UserId;
        next();
      } else {
        res.send({ msg: "Token didn't match, Please Login First!" });
      }
    });
  } else {
    res.send({ msg: "Please Login First!" });
  }
};

module.exports = { authMiddleware };
