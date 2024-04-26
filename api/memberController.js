const members = require('./memberModel');

exports.getAllMembers = async(req, res) => {
  const results = await members.getAllMembers();
  res.status(200).json({
    status: 'success',
    data: results,
  })
};
