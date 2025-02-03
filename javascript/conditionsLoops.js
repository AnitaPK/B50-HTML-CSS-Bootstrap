age = 32;
citizen = 'Indian'

if(age >= 18 && citizen == 'Indian'){
    console.log("Can Vote")
}else{
    console.log("Can't VOte")
}

marks = 99          
//  fail, pass with second Class,  pass with first Class pass with Disti
//                       <35        35>m<60                 60>m<75        75<m>100
if(marks >=0 && marks <=100){
if(marks<35){
    console.log("fail")
}else if(marks >= 35 && marks < 60){
    console.log("pass with second Class")
}else if(marks >= 60 && marks < 75){
    console.log("pass with first Class")
}else{
    console.log("pass with Disti...")
}
}else{
    console.log("Invalid")
}

for(i=1; i<=10; i++){
    console.log("3 * " + i + " = " + 3*i)
    // console.log(`2 * ${i} = ${2*i}`)
}
''
function tablePrint(n){
    for(i=1; i<=10; i++){
        console.log(`${n} * ${i} = ${n*i}`)
    }   
}
tablePrint(17)
tablePrint(27)

function numberChecker(n){
    if(n>0){
        console.log("number is positive")
    }else if(n<0){
        console.log("number is negetive")
    }else{
        console.log("It is 00000000000")
    }
}
numberChecker(14);
numberChecker(-14)
numberChecker(0)

let count = 0;
// Increament();
// Decreament();



function counter(count, action){
    switch (action) {
        case 'Increament':           
            return count = count+1;
        case 'Decreament':
            return count = count-1;
        default:
            return count
    }
}

console.log("Increament : count : "+counter(count, 'Increament'))
console.log("Decreament : count : "+counter(count, 'Decreament'))
// counter(count,'ertyui')

day = 23;
const today = new Date();
// const day = today.getDay();
switch (day){
    case 1:
        console.log("IT is monday Working Day....")
        break;
    case 2:
            console.log("IT is Tue Working Day....")
        break;
    case 3:
            console.log("IT is Wed Working Day....")
        break;
    case 4:
            console.log("IT is Thur Working Day....")
        break;

    case 5:
            console.log("IT is Fri Working Day....")
        break;

    case 6 , 0: 
            console.log("ITs Holiday")
            break;
    default:
        console.log("You have entered Invalid number")
}




i =0;
while(i<=10){
 console.log("2 * " + i + " = " + 2*i);
 i++;
}

i=10
do{
    console.log("3 * " + i + " = " + 3*i);
    i++
}while(i<10)

num1 = Math.random()
console.log(num1)