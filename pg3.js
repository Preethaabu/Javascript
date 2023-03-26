//compare two objects
let laptop1={
    cpu:'i5',
    ram:16,
    brand:'lenova',
    getconfig: function()
    {
        console.log(this.cpu);
    },
    compare: function(other)
    {
        if(this.cpu> other.cpu)
           console.log(this)
        else
           console.log(other)
    }
    
}

let laptop2={
    cpu:'i7',
    ram:16,
    brand:'hp',
    getconfig: function()
    {
        console.log(this.cpu);
    },
    compare: function(other)
    {
        if(this.cpu> other.cpu)  //this-refers to object that calls the function
           console.log(this)
        else
           console.log(other)
    }
 }
 function getfastlap(laptop1,laptop2)
{
  if(laptop1.cpu>laptop2.cpu)
     console.log(laptop1)
  else
     console.log(laptop2)
}
getfastlap(laptop1,laptop2)
console.log("compare")
laptop2.compare(laptop1)

//constructor func

console.log("CONSTRUCTOR FUNCTION");
//new-create a new object
function Stud(name,age) {
    this.name=name;
    this.age=age;

    this.dept= function()
    {
        console.log("AI&DS")
    }
}
let stud1= new Stud('pre',18); //if we dont use new keyword we get undefined
let stud2= new Stud('joe',19);

console.log(stud1)
console.log(stud2.name);
stud1.dept();//printing dept inside the func


//we can change the age of stud1 by this way => stud1.age=12

//Arrays
console.log("ARRAYS")

let names= new Array('pre','leka','anu','yo','nans');
names[5]='vedha'
console.log(names)
//console.log("*********************************");
let values=[5,6,7];
console.log(values)
console.log(values.length)

let value=[];
value.push(6); //add an element at end 
value.push(7); 
value.push(8);
console.log(value)
value.pop(7)
console.log(value)
//console.log('****************************')
demo=[1,2,3,4,5];
console.log(demo.shift()) //remove element from first
console.log(demo)
//console.log('****************************')
//console.log('****************************')
console.log(demo.unshift(16));
console.log(demo)
//console.log('****************************')
let demo1=[9,8,7,6,5]
console.log(demo1.splice(2))
console.log(demo1)
//console.log("****************************")
let demo2=[9,8,7,6,5]
console.log(demo2.splice(2,1)) //removes only 1 element  //1 arg-index ,2 arg- num of elements to remove
console.log(demo2)
//console.log('*****************************')
let demo3=[9,8,7,6,5]
console.log(demo3.splice(2,2, 16,22)) 
console.log(demo3)
//console.log('**********************************')

console.log(values[1]) //if we give index out of range it gives undefined but not an error

let data=['pre',16, {dept:'Ai&Ds'}, function(){ console.log("Student")}];
console.log(data)
data[3](); //calling the func inside array
//for of loop
console.log("***************************************")
let num=[]
num[0]=1
num[10]=9
console.log(num)
console.log(num.length)
for(n of num) {    //print the elements one by one
    console.log(n)
}
//console.log("*********************************************")
for(key in num){
    console.log(key)  //fetches key value
}
//console.log("**********************************************")
for (let key in num) {     //shld use key to fetch the value
    console.log(num[key])
}
console.log("****************************************")
//array destructing
let nums=[1,2,3,4];
let [a,b,c,d] = nums
console.log(a,b,c,d)

let words="Hello Good morning to each and everyone".split(' ');
let [l,m,j,o,...p]= words;   //three dots also carry the rem unassigned values of the string
console.log(l,m,j,o,p)
console.log(p)

