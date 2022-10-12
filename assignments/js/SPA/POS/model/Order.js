function orderModel(itemID,itemName ,itemPrice,itemQuantity,itemTotal) {
    return{
        id : itemID,
        name : itemName,
        price : itemPrice,
        quantity: itemQuantity,
        total: itemTotal
    };
}