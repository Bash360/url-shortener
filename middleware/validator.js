const { matchedData, validationResult } = require("express-validator");
async function validateResult(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  }
  req.data = matchedData(req);
  next();
}
module.exports = validateResult;
