class User{
    constructor(username,email){
        this.username = username;
        this.email=  email
    }
    post(){
        console.log(`${this.username} has created a post`);
        
    }
}
class Admin extends User{
    constructor(username,email){
        super(username,email)//comment
    }
    
}