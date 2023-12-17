class User {
  _email;

  constructor(email) {
    this._email = email;
  }

  get email() {
    return this._email;
  }

  set email(newEmail) {
    this._email = newEmail;
  }
}

class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  blacklistedEmails = [];

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const mango = new Admin({ email: "mango@mail.com", access: Admin.role.SUPERUSER });

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // Output: ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // Output: false
console.log(mango.isBlacklisted("poly@mail.com")); // Output: true
