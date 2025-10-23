// Create a function sumArray that takes an array of numbers and returns their total sum
function sum(arr:Array<number>):number{
 
 let sum3:number = arr.reduce((acc:number,ele:number)=>{ return acc+ele},0)
   return sum3
}

let arr:number[] = [1,2,3,4,5,6,7,8] df
console.log(sum(arr));

