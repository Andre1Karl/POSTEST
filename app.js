var t=0;

function addtocart(id,name,price){
	var testData = !!document.getElementById(id);
	if (testData) {
		add(id,price);
	} else{
	const order = document.createElement("tr");
	order.setAttribute('id',id);
	order.innerHTML = '<td>' +name+ '</td><td><button onclick="minus(\''+id+'\','+parseFloat(price)+')">-</button><span>1</span><button onclick="add(\''+id+'\','+price+')">+</button></td><td>' +parseFloat(price)+ '</td>';
	document.getElementById('items').appendChild(order);
	t=t+parseFloat(price);
	document.querySelector('#total').innerHTML = 'TO BE PAID: ' + t.toFixed(2);
	document.querySelector('#price').innerHTML = 'YOU ARE PAYING: ' + t.toFixed(2);
}
}
function add(id,price){
	var current = parseInt(document.querySelector('#'+id+' span').innerHTML);
	document.querySelector('#' +id+' span').innerHTML=current+1;
	t=t+parseFloat(price);
	document.querySelector('#total').innerHTML = 'TO BE PAID: ' + parseFloat(t).toFixed(2);
	document.querySelector('#price').innerHTML = 'YOU ARE PAYING: ' + t.toFixed(2);
}
function minus(id,price){
	var current = parseInt(document.querySelector('#'+id+' span').innerHTML);
	document.querySelector('#'+id+' span').innerHTML=current-1;
	t=t-parseFloat(price);
	document.querySelector('#total').innerHTML = 'TO BE PAID: ' + parseFloat(t).toFixed(2);
	document.querySelector('#price').innerHTML = 'YOU ARE PAYING: ' + t.toFixed(2);
	if (current-1<=0){
		document.querySelector('#'+ id).remove();
	}
}