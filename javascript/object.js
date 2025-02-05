let user = {
    firstName: 'Amitabh',
    lastName:'Bacchan',
    age:80,
    favMovies:['Shole','Mard','Shakti'],
    fullName:function(){
        return this.firstName+ ' '+ this.lastName
    }
}
typeof(user)   //object

console.log(user.firstName)

console.log(user['firstName'])

user.favMovies.map((m)=>console.log(m))

user.age = 81;
console.log(user.age)

user.height = 183
console.log(user)
user.favMovies.push('Bhootnath')
console.log(user)


fName = user.fullName()
console.log(fName)

for (let key in user){
    console.log(key,user[key])
}
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

strUser = JSON.stringify(user)
console.log(strUser)

newUser = JSON.parse(strUser)
console.log(newUser)


