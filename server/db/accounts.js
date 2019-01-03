const db = require('./db')

function getAccounts(req, res, next) {
  console.log('TEST::::::::::::::');
  db.any('SELECT * FROM account')
    .then(function (data) {
      console.log(data);
      res.status(200)
        .json(data);
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleAccount(req, res, next) {
  var accountID = parseInt(req.params.account_id);
  db.one('select * from accounts where user_id = $1', accountID)
    .then(function (data) {
      res.status(200)
        .json(data);
    }).catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAccounts: getAccounts,
  getSingleAccount: getSingleAccount
};
