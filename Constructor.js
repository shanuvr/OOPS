function Movie(name,rating){
    this.name = name;
    this.rating = rating ;
     this.play=()=>{
        console.log(`${this.name} has ${this.rating}`);
        
        this.pause=()=>{
            console.log(`${this.name} has stopped PLaying`);
            
        }
     }
    

}

const GameOfThrones = new Movie("got",4.4)
GameOfThrones.play()
GameOfThrones.pause()