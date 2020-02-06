function logRoutePath(req, res, next) {
  console.log(req.path)
  next();
}

module.exports = logRoutePath;