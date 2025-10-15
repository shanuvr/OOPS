var User = /** @class */ (function () {
    function User(name, password) {
        this.name = name;
        this.password = password;
    }
    User.prototype.getName = function () {
        return this.password;
    };
    return User;
}());
var shanu = new User("shanu", "mypass");
console.log(shanu.getName());
