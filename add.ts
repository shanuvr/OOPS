// Create a function that adds two numbers.
 function add(num1:number,num2:number):number{
    return num1+num2
 }
 console.log( add(2,3));
 
//  Create a function that takes a name and returns "Hello, <name>".
 function add2(name:string):string{
    return `hello ${name}`
 }
console.log( add2("sam here"));

// Create a function that checks if a number is even or odd.
function check(num1:number):boolean{
  if(num1%2){
    return true
  }
  return false
}
console.log(check(5));

//Create a function that returns the max of three numbers.

function checkMax(num1:number,num2:number,num3:number):number{
        if(num1>= num2&& num1>=num3){
            return num1
        }
        else if(num2 >=num1&&num2>=num3){
            return num2
        }else{
            return num3
        }
}
 console.log(checkMax(10,103,13));
 
