class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  post(content) {
    console.log(`${this.username} posted: "${content}"`);
  }
}

class Admin extends User {
  constructor(username, email) {
    super(username, email);
  }

  deletePost(targetUser) {
    console.log(`${this.username} (admin) deleted a post from ${targetUser}`);
  }
}

class SuperAdmin extends Admin {
  constructor(username, email) {
    super(username, email);
  }

  banUser(targetUser) {
    console.log(`${this.username} (super admin) banned ${targetUser}`);
  }
}

// ✅ Example usage
const user1 = new User("Shanu", "shanu@gmail.com");
const admin1 = new Admin("Chandler", "admin@gmail.com");
const superAdmin1 = new SuperAdmin("Monica", "superadmin@gmail.com");

user1.post("Learning OOP is fun!");
admin1.deletePost("Shanu");
superAdmin1.banUser("Chandler");
