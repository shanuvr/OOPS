class User{
     private name: string;
     private password:string;

    constructor(name:string,password:string){
        this.name = name;
        this.password  = password
    }
     getName(){
        return this.password
     }


}
const shanu = new User("shanu","mypass")
console.log(shanu.getName());
