fetch('./data.json')
.then(response => response.json())
.then(data => {
    document.getElementByID("description")[1].innerHTML = "hello please";
})
.catch(error => console.error('Error:', error));