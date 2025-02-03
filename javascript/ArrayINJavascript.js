 arr1 = []
 typeof(arr1)  //object

//  string number Boolean null undefined object symbol bigInt 

fruits = ['Banana','Papaya','Manogo', 'Apple']
console.log(fruits)
numArray = [23, 45, 87, 89]
user = ['John', 30, 'Kolhapur']

fruits.push('Kiwi')
console.log(fruits)

fruits.unshift('Strawberry')
console.log(fruits)

console.log(fruits[1])

console.log(fruits.length)

fruits[6]= 'Blueberry' 
console.log(fruits)

fruits.splice(2,0,'Grapes')

console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.shift()
console.log(fruits)

for(i=0;i<fruits.length;i++){
    console.log("I dont Like to EAT....."+fruits[i])
}

for(let Mahika in fruits){
    console.log("Now I Like to EAT....."+fruits[Mahika] +" "+ Mahika +"  times")
}

for (let Value of fruits){
    console.log("I have " + Value)
}

// forEach, map, filter, reduce, findIndex, find, some 


function addition(){
    console.log(4+4)
}
// (function(){})()

addition = ()=>console.log(4+4);
(()=>{})()

fruits.forEach((element)=>console.log("fruits from foreach ",element))

fruits.map((e)=>console.log("Fruits from map",e))

