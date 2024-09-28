/* 
Truthy:
1. true
2. any number (+ve, -ve) will be truthy other than 0
3. any string other than empty string
4. '0', 'false'
5. {}
6. []


Falsy:
1. false
2. 0
3. '' (empty string)
4. undefined
5. null
*/
let x = [5, 6];
console.log(x);
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// optional 
// check falsy
const y = 50;
if (!y){
    console.log('value is falsy') //false hoile dukte dibe nah
}

else
{
    console.log("value is truthy")
}
const z = {class: 9};
// check true
if(!!x){
    console.log('value is truthy'); //false hoile dukte dibe nah
}
