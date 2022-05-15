//XmlHttpRequest


let xhr = new XMLHttpRequest();
xhr.open("GET",'book.json', true);
xhr.send();

xhr.onreadystatechange = function (){
	if(xhr.readyState !=4) return;
	if(xhr.status != 200){
		console.log(xhr.status + ": " + xhr.statusText);
	}else{
		// console.log(xhr.responseText);
		// console.log (JSON.parse (xhr.responseText));
		let arrText = (JSON.parse (xhr.responseText));
		// let objText = arrText.forEach(element => {
		// 	console.log (element)
		// });
		
		console.log (arrText);

		for (let key in arrText) {
			document.write (`${key} : ${arrText[key]}<br>`)
		}
	}
}
