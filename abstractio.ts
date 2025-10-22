class Test{
   private test1():void{
        console.log("failed");
        
    }
   private test2():void{
        console.log("failed again ");
        
    }
   public test3():void{
        this.test1()
        this.test2()
        console.log("test 3");
        

    }
}

const obj = new Test()
obj.test3();