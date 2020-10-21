const greeter = (name = "user", age) => {
    console.log('Hello '+name)
}


// greeter("Hammad")


const product = {
    label: "Thing",
    stock: "available"
}

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

transaction("order")