/* exported Account */
function Account(number, holder, transactions) {
  this.number = number;
  this.holder = holder;
  this.transactions = transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (!Number.isInteger(amount) || amount <= 0) {
    return false;
  } else {
    var transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  }
};

Account.prototype.withdraw = function (amount) {
  if (!Number.isInteger(amount) || amount <= 0) {
    return false;
  } else {
    var transaction = new Transaction('withdrawal', amount);
    this.transactions.push(transaction);
    return true;
  }
};

Account.prototype.getBalance = function () {
  var totalDeposits = 0;
  var totalWithDrawals = 0;
  for (var key in this.transactions) {
    var newTransaction = this.transactions;
    var transactionType = newTransaction[key].type;
    if (transactionType === 'deposit') {
      totalDeposits += newTransaction[key].amount;
    } else if (transactionType === 'withdrawal') {
      totalWithDrawals += newTransaction[key].amount;
    }
  }

  var accountBalance = totalDeposits - totalWithDrawals;
  return accountBalance;
};
