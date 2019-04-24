var tipPercent = prompt("How was the service (Great, Okay, or SoSo)?");

console.log(tipPercent)
if (tipPercent === "Great") {
	tipPercent = 0.2;
}
else if(tipPercent === "Okay") {
		tipPercent = 0.15;
}
else {
	tipPercent = 0.1;
};
var billAmount = parseFloat(prompt("How much was your bill?"));


function gratuity(billAmount,tipPercent){
	return billAmount * tipPercent;
}
var totalTip = gratuity(billAmount,tipPercent);
console.log(totalTip);

function billAndTip(billAmount,totalTip){
	return billAmount + totalTip;
}
var totalBill = billAndTip(billAmount,totalTip)
console.log(totalBill)
alert("You owe $" + totalBill);