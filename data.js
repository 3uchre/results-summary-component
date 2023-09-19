fetch('./data.json')
.then(response => response.json())
.then(data => {
    document.getElementsByClassName("icon")[0].src = data[0].icon;
    document.getElementsByClassName("category")[0].innerHTML = data[0].category;
    document.getElementsByClassName("score")[0].innerHTML = data[0].score;
})
.catch(error => console.error('Error:', error));