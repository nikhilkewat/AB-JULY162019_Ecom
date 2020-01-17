var jwt = require("jsonwebtoken");
const Cryptr = require("cryptr");
const cryptr = new Cryptr("secret_cryptr_key");

module.exports = function(req, res, next) {
  var token = req.headers.token;

  if (
    token !== "undefined" &&
    token !== "" &&
    token !== "null" &&
    token !== undefined &&
    token !== null
  ) {
    let deCryptedToken = cryptr.decrypt(token);
    jwt.verify(
      deCryptedToken,
      "jwt_token_secret_abjuly",
      (err, decodedToken) => {
        if (err) {
          res
            .status(403)
            .json({ success: false, message: "Failed to authenticate user." });
        } else {
          next();
        }
      }
    );
  } else if (req.headers.referer === req.headers.origin + "/") {
    next();
  } else {
    res.status(501).json({ success: false, token: "No Token Provided." });
  }
};
