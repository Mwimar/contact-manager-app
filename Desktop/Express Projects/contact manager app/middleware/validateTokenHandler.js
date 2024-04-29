const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User not Authorized");
      }
      req.user = decoded.user;
      next();
    });
    if (!token) {
      throw new Error("User not authorized or token is missing");
    }
  }
});

module.exports = { validateToken };

// const asyncHandler = require("express-async-handler");
// const jwt = require("jsonwebtoken");

// const validateToken = asyncHandler(async (req, res, next) => {
//   let token;
//   let authHeader = req.headers.authorization; // Use lowercase 'authorization'

//   if (authHeader && authHeader.startsWith("Bearer ")) {
//     // Added space after Bearer
//     token = authHeader.split(" ")[1];

//     try {
//       const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//       console.log(decoded);
//       req.user = decoded; // Store the decoded token to req.user
//       next(); // Proceed to the next middleware or route handler
//     } catch (err) {
//       res.status(401).json({ message: "User not authorized" });
//     }
//   } else {
//     res.status(401).json({ message: "No token provided, user not authorized" });
//   }
// });

// module.exports = { validateToken };
