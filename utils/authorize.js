function authorize(req, res, next) {
  //if no auth header
  //other validation

  const authHeader = req.headers.authorization;
  const authToken = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(authToken, `${process.env.JWT_SECRET}`);

    req.decoded = decoded;
    next();
  } catch (error) {
    return res.status(401).send("Invalid auth token");
  }
}

module.exports = authorize;
