var User3 = /** @class */ (function () {
    function User3(name) {
        this.name = name;
    }
    User3.prototype.change = function (name2) {
        this.name = name2;
    };
    User3.prototype.view = function () {
        return this.name;
    };
    return User3;
}());
var shanu4 = new User3("shanu");
shanu4.change("changed");
console.log(shanu4.view());

//wesssdsdssdddddfdfsfd