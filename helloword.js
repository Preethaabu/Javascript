console.log("Hello worldkkj")


let res
let a=5,b=6
res=a+b
console.log(res)


let num=10_00_00
let num1=1.5e10
let num2=0xf
let num3=5/0
let num4=-4/0
let user='pree'
console.log(num4)
console.log(typeof user);
console.log(Number.MAX_VALUE)

let val=10030485949434303490007766577887n
console.log(val)
console.log(val +3n)

let val2=12127387493289483294839489849283n
console.log(val2 + 2n)

fn="Preetha"
ln="abu"
console.log(fn + ln)
console.log(fn + " " + ln)

user1='preetha "b.tech"'
console.log(user1)

// '\' (escape char)*cancel the spcl meaning of char
// \n-newline
// \t-tab
user2="preetha\"b.tech\""
console.log(user2)
user3="pre\betha"
console.log(user3)

let boole=7>8
console.log(boole)

let ger=null
console.log(ger)
console.log(typeof ger)

let hjk
console.log(hjk)
console.log(typeof hjk)

//type conversion

//explicit
let ty=String(6)
let ty1="6"
console.log(ty, typeof ty)
console.log(ty1, typeof ty1)

let ty2= Number('123')
console.log(ty2,typeof ty2)

//type coersion
let x
x=6
console.log(x, typeof x)

x= x + ''
console.log(x, typeof x)

x=x + 2
console.log(x, typeof x)

x=+x + 2
console.log(x, typeof x)

x= x - 2
console.log(x,typeof x)

let der=Number("123 pre")
console.log(der)
 let deru=parseInt("123pre")
 console.log(deru)
 let derui=parseInt("t456pre")
 console.log(derui)


 //objects

 let laptop1={
    cpu:'i7',
    ram:16,
    brand:'hp'
 }
 console.log(laptop1)

 let laptop2={
    cpu:'i7',
    ram:16,
    brand:'hp'
 }
 console.log(laptop2.brand)

 for (key in laptop1)
 {
    console.log(key,laptop1.key)
 }

 for (key in laptop1)
 {
    console.log(key,laptop1[key])
 }

 



