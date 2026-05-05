const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  try {
    // Get token from request header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token — access denied!" });
    }

    // Extract token — "Bearer eyJ..." → "eyJ..."
    const token = authHeader.split(" ")[1];

    // Verify token is valid and not expired
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user from token and attach to request
    req.user = await User.findById(decoded.userId).select("-password");

    next(); // token is valid — continue to route
  } catch (error) {
    res.status(401).json({ message: "Invalid token!" });
  }
};

module.exports = { protect };
