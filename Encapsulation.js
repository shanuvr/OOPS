class Account{
    #followers = 0
    constructor(username){
        this.username = username
      
    }
    getFollowers(){
        return this.#followers
    }
    follow(){
        return this.#followers+=1;
    }
    unfollow(){
        if(this.#followers>0){
            return this.#followers-1
        }
    }
}
const person = new Account("username")
person.follow()
person.follow()
person.follow()
person.follow()
// person.#followers = 1wrr
console.log(person.getFollowers());
