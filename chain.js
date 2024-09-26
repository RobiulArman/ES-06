// data access

const data = [{id: 1, name:"abul", address: "kochu khet"}];

console.log(data[0].address);

const products = {
    count:500,
    data: [
        {id:1,name:'lenovo laptop', price:6500},
        {id:1,name:'lenovo laptop', price:6500},
    ]
}

console.log(products.data[1].price);


const user = {
    id:5001,
    name:'Robiul',
    adress: {
        street: {
            first: 'uttara',
            second:'Dhaka',
            third: '1230'
        }
    }
}

console.log(user.adress.street.second)


const user2 = {
    id:5001,
    name:'Robiul',
    address: {
       city:'dhaka',
       country:'Bangladesh'
    }
}

// Optional Chaining
console.log(user2.address.street?.second);