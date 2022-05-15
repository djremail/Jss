//XmlHttpRequest


let xhr = new XMLHttpRequest();
xhr.open("GET",'book.json', true);
xhr.send();

xhr.onreadystatechange = function (){
	if(xhr.readyState !=4) return;
	if(xhr.status != 200){
		console.log(xhr.status + ": " + xhr.statusText);
	}else{
		let newText = (JSON.parse (xhr.responseText));
		let resultText = document.querySelector ('.main_text')
		// console.log (newText.book);

		newText.book.forEach(element => resultText.innerHTML = (element));
	}
}
