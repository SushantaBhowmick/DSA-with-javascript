
//Filter 
Array.prototype.myFilter = function(callback){
    let result = [];
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            result.push(this[i])
        }
    }
    return result;
}

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.myFilter((num)=>num!==2)
// console.log(evenNumbers)

const users = [
    { name: "Alice", active: true },
    { name: "Bob", active: false },
    { name: "Charlie", active: true }
];

const activeUsers = users.myFilter(user => !user.active);
console.log(activeUsers);