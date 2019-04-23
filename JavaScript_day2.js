var shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
shoppingList.push('fruit loops');
shoppingList[4] = 'fair trade coffee';
shoppingList.splice(2,2, 'rice', 'beans');
var shoppingCart =[];
shoppingCart.push(shoppingList.pop());
shoppingCart.push(shoppingList.pop(shoppingList.reverse))
while(shoppingList.length > 0){
	shoppingCart.push(shoppingList.pop());
}
shoppingCart.reverse(shoppingCart.sort());
console.log (shoppingCart.toString());