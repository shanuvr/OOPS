class BankAccount{
    #balance
    constructor(owner,balance){
        this.owner = owner;
        this.#balance=balance
    }

    deposit(amount){
        this.#balance+=amount
    }
    widraw(amount){
        this.#balance-=amount
    }
    check(){
        console.log(`${this.#balance}`);
        
    }
}
const newAcc = new BankAccount("shanu",1000)
newAcc.deposit(2000)
newAcc.check()