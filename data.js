fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        
        var table = document.getElementById("table");
        for (var i = 0, cell; cell = table.cells[i]; i++) {
            document.getElementByClassName("icon")[i].src = data[i].icon;
            document.getElementByClassName("category")[i].innerHTML = data[i].category;
            document.getElementByClassName("score")[i].innerHTML = data[i].score;
        }
})