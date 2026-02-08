class User3{
private name:string
    constructor(name:string){
        this.name = name;
  
    }
    change(name2:string) :void {
        this.name = name2
    }
    view(){
        return this.name
    }
}
  
const shanu4 = new User3("shanu")

shanu4.change("changed")
console.log(shanu4.view());



