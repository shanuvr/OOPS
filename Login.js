function User(name ,email){
    this.name =name;
    this.email = email;
    this.login = function(){
        console.log(`${this.name} logged in with ${this.email}`);
        
    }
    this.logout = ()=>{
        console.log(`${this.name} logged out`);
        
    }
}

const shanu = new User("shanu","shanu@gamil.com")
shanu.login()
shanu.logout()
const chandler = new User("chandler","chandler@gamil.com")
chandler.login()
chandler.logout()