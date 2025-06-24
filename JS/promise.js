

const cart = ["shoes","pants","kurta"]

createOrder(cart)
.then((orderId)=>{
        console.log(orderId)
        return orderId
    })
    .then((orderId)=>{
        return paymentMethod(orderId)
    })
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err.message)
    })

function createOrder(cart){
    const pt = new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const error = new Error("Cart is not valid")
            reject(error)
        }

        const orderId = "93287"
        if(orderId){
           setTimeout(() => {
             resolve(orderId)
           }, 2000);
        }
    });
    return pt;
}

function paymentMethod(orderId){
    return new Promise(function(resolve,reject){
        if(validateCart(orderId)){
            const error = new Error("OrderId is not valid")
            reject(error)
        }
        resolve("Payment successfull")
    })
}

function validateCart(cart){
    return true;
}