class User{
    public name:string;
     #age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.#age  = age;

    }

    changeAge(newAge:number){
        this.#age +=newAge
    }
    getAge(){
        console.log(this.#age);
        
    }
}

class User2 extends User{

}

const newUser = new User2("shnau",25)
newUser.changeAge(2)
newUser.age = 99;
newUser.getAge()

