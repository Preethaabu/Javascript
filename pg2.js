//functions
console.log("FUNCTION")
function add(a,b)
{
return result=a+b;
}
value=add(5,8);
console.log(value)
console.log("ARROW FUNCTION")
//when there is only one stmt then we need not put curly braces and when that on stmt is a return stmt we nee not use return keyword as well
let sum= (a,b) => 
{
return result=a+b;
}
val=sum(5,8);
console.log(val)

//functions nd objects


let laptop1={
    cpu:'i5',
    ram:16,
    brand:'lenova',
    getconfig: function()
    {
        console.log(this.cpu);
    }
}
 console.log(laptop1)

 let laptop2={
    cpu:'i7',
    ram:16,
    brand:'hp',
    getconfig: function()
    {
        console.log(this.cpu);
    }
 }

 laptop2.getconfig()
 