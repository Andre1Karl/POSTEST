var t=0;

function addtocart(name,price){
	const order = document.createElement("tr");
	order.innerHTML = '<td>' +name+ '</td><td>1</td><td>' +price+ '</td>';
	document.getElementById('items').appendChild(order);
	t=t+parseFloat(price);
	document.querySelector('#total').innerHTML = 'TO BE PAID:' + t.toFixed(2);
}