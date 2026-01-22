 class profile{
    constructor(username,following,followers){
        this.username=username;
        this.following=following;
        this.followers=followers;
    }

        folllow(){
            console.log(`${this.username} has gained a follower total is ${this.followers + 1}`);
            
        }
        unfolllow(){
            console.log(`${this.username} has lost a follower total is ${this.followers-1}`);
            
        }
        bio(){
            console.log(`${this.username} has gained a follower total is ${this.followers} and has ${this.following} following`);
            
        }
    
}

const shanu = new profile("shanu",100,200)
shanu.folllow()
shanu.unfolllow()
shanu.bio()
