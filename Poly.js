class Admin{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    login(){
        console.log(`${this.name} logged in`);
        
    }
}

class User extends Admin{
    constructor(phone,place,name,email){
   
        super(name,email)
        this.phone = phone;
        this.place = place
    }
    
   logout(){
    console.log(`${this.phone} logged out ${this.place}`);
    
   }
}

const sam = new User("sam","sma$ff")
sam.login()
sam.logout()
