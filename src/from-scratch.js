class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width;
  }
  getPerimeter() {
    return 2 * (this.length + this.width)
  }
  isSquare() {
    return this.length === this.width;
  }

}

class Vehicle {
  passengers = [];
  constructor(type, capacity, color = 'black') {
    this.type = type;
    this.capacity = capacity;
    this.color = color;
  }

  paint(newColor) {
    this.color = newColor;
    return this.color;
  }
  addPassenger(passenger) {
    if (this.passengers.length < this.capacity) {
      this.passengers.push(passenger);
      return this.passengers.length;
    } else {
      return -1;
    }
  }
};

class PasswordManager {
  constructor(password) {
    this.password = password
  }
  checkPassword(attempt) {
    return attempt === this.password;
  }
  setPassword(oldPassword, newPassword) {
    if (oldPassword === this.password) {
      this.password = newPassword;
      return true;
    }
    return false;


  }

}




class TodoList {
  #items = [];

  constructor(title) {
    this.title = title;
  }

  addItem(description) {
    this.#items.push(description);
    return this.#items.length;
  }
  removeItem(description) {
    const index = this.#items.indexOf(description);

    if (index === -1) {
      return null;
    }
    this.#items.splice(index, 1);
    return description;
  }
  // .splice(index to modify, 0 means to add
  // /1 means to replace, what you're adding or replacing)
  getItems() {
    return [...this.#items];
  }


};

class BankAccount {
  static = 0;

  constructor(firstName, lastName, balance = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;

    BankAccount.totalBalance += balance;
  }
  deposit(amount) {
    this.balance += amount;
    BankAccount.totalBalance += amount;
    return `Your balance is ${this.balance}.00`;
  }
  withdraw(amount) {
    if (amount > this.balance) {
      return "You do not have enough funds.";
    }
    this.balance -= amount;
    BankAccount.totalBalance -= amount;
    return `Your balance is ${this.balance}.00`;
  }
  static getTotalHoldings() {
    return BankAcoount.totalBalance;
  }

}
// to be continued

module.exports = {
  Rectangle,
  Vehicle,
  PasswordManager,
  TodoList,
  BankAccount,
};
