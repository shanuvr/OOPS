class Account {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${this.owner} has deposited ${amount}. New balance is ${this.balance}`);
  }

  withdraw(amount) {
    this.balance -= amount;
    console.log(`${this.owner} has withdrawn ${amount}. New balance is ${this.balance}`);
  }
}

class PremiumAccount extends Account {
  constructor(owner, balance) {
    super(owner, balance); // ✅ must come first
  }

  loan(amount) {
    this.balance += amount;
    console.log(`Loan approved for ${amount}. New balance: ${this.balance}`);
  }
}

const shanu = new PremiumAccount("Shanu", 5000);
shanu.deposit(2000);
shanu.withdraw(1000);
shanu.loan(5000);
